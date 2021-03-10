var defaultConfig = {
    /**
     * tell calx to perform auto calculation after change has been made,
     * if autoCalculate is false, you need to trigger calculation manually
     * by calling the calculate method $(selector).calx('calculate');
     */
    'autoCalculate': true,

    /**
     * event that trigger calculation to be executed when autoCalculate is true
     */
    'autoCalculateTrigger': 'blur',

    /**
     * callback triggered right before calculation is performed
     * when callback is executed, jQuery Calx will pass sheet object as the context
     * so you can access all sheet API via &lt;this&gt; keyword
     */
    'onBeforeCalculate': null,

    /**
     * callback triggered right after calculation is performed
     */
    'onAfterCalculate': null,

    /**
     * callback triggered right before calculation result is rendered
     */
    'onBeforeRender': null,

    /**
     * callback triggered right after calculation result is rendered
     */
    'onAfterRender': null,

    /**
     * default fomatting rule when data-format is not present
     */
    'defaultFormat': false,

    /**
     * used for server side formula, when you call the SERVER() function,
     * jQuery Calx will pass everything to this URL, and wait for the response
     * before processing the next calculation
     */
    'ajaxUrl': null,

    /**
     * ajax method used for requesting formula result from the server side
     */
    'ajaxMethod': 'get',

    /**
     * check for circular reference upon initialization, default false
     */
    'checkCircularReference': false

};

// $('#sheet1').calx(defaultConfig);

$(".calx").each(function(index) {
    $(this).calx(defaultConfig);
});

// $(".exportJPG").on("click", function(event) {
//     id = $(this).data("id")
//     html2canvas(document.querySelector(".container" + id), { scrollY: -window.pageYOffset }).then(canvas => {
//         Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height)
//     });
// });

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "_" + h + "-" + mi + "-" + s;
}

$(".exportJPG").on("click", function(event) {
    id = $(this).data("id")
    html2canvas(document.querySelector(".container" + id), { scrollY: -window.pageYOffset }).then(canvas => {
        var image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
        var a = document.createElement('a');
        a.href = image;
        a.download = document.querySelector(".container" + id).dataset.title + '_' + getFormattedTime() + '.jpg';
        a.click();
    });
});

$(".copyJPG").on("click", function(event) {
    id = $(this).data("id")
    html2canvas(document.querySelector(".container" + id), { scrollY: -window.pageYOffset }).then(canvas => {
        canvas.toBlob(blob => {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            //alert("Copied to clipboard")
        })
    });
});

// $(".exportPDF").on("click", function(event) {
//     id = $(this).data("id")
//     html2canvas(document.querySelector(".container" + id), { scrollY: -window.pageYOffset }).then(canvas => {
//         const doc = window.jspdf.jsPDF({ unit: 'px', format: [canvas.width, canvas.height] });
//         var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height)
//         doc.addImage(img, 'JPEG', 0, 0);
//         doc.save();
//     });
// });

$(".exportPDF").on("click", function(event) {
    id = $(this).data("id")
    html2canvas(document.querySelector(".container" + id), { scrollY: -window.pageYOffset }).then(canvas => {
        var imgData = canvas.toDataURL(
            'image/jpg');
        // var doc = window.jspdf.jsPDF({ unit: 'pt', format: [canvas.width, canvas.height] });
        var doc = window.jspdf.jsPDF({ unit: 'pt', size: 'A4' });
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'JPEG', 0, 0, width, height);
        doc.save(document.querySelector(".container" + id).dataset.title + '_' + getFormattedTime() + '.pdf');
    });
});


for (let index = 0; index < config_data.length; index++) {
    const element = config_data[index];
    for (const [key, value] of Object.entries(element)) {
        document.querySelector(".container" + (index + 1) + " input[data-cell=" + key + "]").value = value
    }
}