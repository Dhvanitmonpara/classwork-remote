const asyncHandler = async () => {

    // How many users are active?
    const activeUsers = await db.authors.aggregate([
        {
            $match: {
                isActive: true
            }
        },
        {
            $count: "activeUsers"
        }
    ])

    console.log("activeUsers: " + activeUsers)

    // what is average age of all users
    const averageAge = await db.authors.aggregate([
        {
            $group: {
                _id: "$gender", // group by gender or use _id: null to not grouping them
                averageAge: {
                    $avg: "$age"
                }
            }
        }
    ])

    console.log("averageAge: " + averageAge)

    // List the top 5 most common favorite fruits among the users
    const topCommonFavFruits = db.authors.aggregate([
        {
            // group combines hundreds and thousands of documents into one (just a single group)
            $group: {
                _id: "$favoriteFruit", // _id is not that database id, it is like based on what thing do you want to group the data
                count: {
                    $sum: 1
                } // it is like creating a new variable and assigning them 1 and counting the sum of them or you can refer to (https://youtu.be/D6Tpjf_VtnE?si=FCOMZ1fE2I2wk0pU) for better understanding
                // every time you find a document then add 1 to the variable named count
            }
        },
        {
            // this is just basic sorting you know
            $sort: {
                count: -1 // descending order
            }
        },
        {
            $limit: 5 // top 5 thing
        }
    ])

    console.log("topCommonFavFruits: " + topCommonFavFruits)

    // Find the number of males and females in the database
    const numberOfMalesAndFemales = db.authors.aggregate([
        {
            $group: {
                _id: "$gender",
                count: {
                    $sum: 1
                }
            }
        }
    ])

    console.log("numberOfMaleAndFemales: " + numberOfMalesAndFemales)

    // which country has the highest number of registered users?
    const highestRegisteredUsersByCountry = db.authors.aggregate([
        {
            $group: {
                _id: "$company.location.country",
                count: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                count: -1
            }
        },
        {
            $limit: 1
        }
    ])

    console.log("highestRegisteredUsersByCountry: " + highestRegisteredUsersByCountry)

    const eyeColors = db.authors.aggregate([
        {
            $group: {
                _id: "$eyeColor"
            }
        }
    ])

    console.log("eyeColors: " + eyeColors)

    // Find the average number of tags by user
    const averageNumberOfTagsByUser_method1 = db.authors.aggregate([
        {
            $unwind: {
                path: "$tags",
            }
        },
        {
            $group: {
                _id: "$_id",
                numberOfTags: {
                    $sum: 1
                }
            }
        },
        {
            $group: {
                _id: null,
                averageNumberOfTags: {
                    $avg: "$numberOfTags"
                }
            }
        }
    ])

    // another way
    const averageNumberOfTagsByUser_method2 = db.authors.aggregate([
        {
            $addFields: {
                numberOfTags: {
                    $size: {
                        $ifNull: ["$tags", []]
                    }
                }
            }
        },
        {
            $group: {
                _id: null,
                averageNumberOfTags: {
                    $avg: "$numberOfTags"
                }
            }
        }
    ])

    console.log("averageNumberOfTagsByUser_method1: " + averageNumberOfTagsByUser_method1)
    console.log("averageNumberOfTagsByUser_method2: " + averageNumberOfTagsByUser_method2)

    const usersWithEnimTag = db.authors.aggregate([
        {
            $match: {
                tags: "enim"
            }
        },
        {
            $count: 'usersWithEnimTag'
        }
    ])

    console.log("usersWithEnimTag: " + usersWithEnimTag)

    // what are the names and age of users who are inactive and have 'velit' as a tag.
    const nameAndAgeOfUsers = db.authors.aggregate([
        {
            $match: {
                isActive: false,
                tags: "velit"
            }
        },
        {
            $project: {
                name: 1,
                age: 1
            }
        }
    ])

    console.log("nameAndAgeOfUsers: " + nameAndAgeOfUsers)

    // How many users have a phone number starting with "+1 (940)"?
    const userWithSpecialNumber = db.authors.aggregate([
        {
          $match: {
            "company.phone": /^\+1 \(940\)/
          }
        },
        {
          $count: 'userWithSpecialNumber'
        }
      ])

      console.log("userWithSpecialNumber: " + userWithSpecialNumber)

}

asyncHandler()