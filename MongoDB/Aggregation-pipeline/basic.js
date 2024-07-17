db.orders.aggregate([
    {
        $match: {
            status: "pending"
        }
    },
    {
        $group: {
            _id: "$customer_id",
            total_amount: {
                $sum: "$amount"
            }
        }
    },
    {
        $sort: {
            total_amount: -1
        }
    },
    {
        $limit: 10
    }
])