const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./contents/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);

    } else {
        const first = result;
        readFile("./contents/second.txt", "utf8", (err, result) => {
            if (err) {
                console.log(err);

            } else {
                const second = result;
                writeFile("./contents/result-Async.txt", `there is the result:${first},${second}`, { flag: 'a' }, (err, result) => {
                    if (err) {
                        console.log(err);

                    } else {
                        //hena el result undefined da last step is a write not read 34an kda maf4 value l result 
                        //  console.log(result);
                        console.log("done task");

                    }
                });

            }
        })


    }
})
console.log("starting the next task");
//the nexttaskcan start before the first is done""InterLeaved"