rs.initiate({
    _id: "rs0",
    members: [
        {
            _id: 0,
            host: "mongodb-primary:27017",
            priority: 4
        },
        {
            _id: 1,
            host: "mongodb-rep1:27018",
            priority: 3
        },
        {
            _id: 2,
            host: "mongodb-rep2:27019",
            priority: 2
        },
        {
            _id: 3,
            host: "mongodb-rep3:27020",
            priority: 1
        }
    ]
});