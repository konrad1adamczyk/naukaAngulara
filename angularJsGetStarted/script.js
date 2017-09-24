document.write("Hello , angular!");

// asdfasdfasdfasdf

// var result = 2+2;
//
// alert(result);

// var work = function () {
//     console.log("working hard");
// };
//
//
// var doWork = function (f) {
//     f();
// };

var workCount = 0;

(function () {


    var createWorker = function () {
        var task1 = function () {
            workCount += 1;
            console.log("task1 " + workCount);
        };
        var task2 = function () {
            workCount += 1;
            console.log("task2 " + workCount);
        };

        return {
            job1: task1,
            job2: task2
        };
    };

    var worker = createWorker();

    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();

}());


