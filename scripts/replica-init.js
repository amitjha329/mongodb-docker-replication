rs.initiate({
    _id: "rs0",
    members: [
        {
            _id: 0,
            host: "mongodb-primary:27017"
        }
    ]
});
rs.add({
    _id: 1,
    host: "mongodb-rep1:27018"
})
rs.add({
    _id: 2,
    host: "mongodb-rep2:27019"
})
rs.add({
    _id: 3,
    host: "mongodb-rep3:27020"
})