// refer to the 'test' database on the localhost for practicing this.

const asyncHandler = async () => {

    const getAuthorDetailsWithBooks = await db.books.aggregate([
        {
            $lookup: {
                from: "authors",
                localField: "author_id",
                foreignField: "_id",
                as: "author_details"
            }
        },
        {
            $addFields: {
                author_details: {
                    $first: "$author_details",
                    $arrayElemAt: ["$author_details", 0] // both does the same
                }
            }
        }
    ])

}

asyncHandler()