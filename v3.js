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



$(".calx").each(function() {
    $(this).calx(defaultConfig);
});

for (let index = 0; index < config_data.length; index++) {
    const element = config_data[index];
    for (const [key, value] of Object.entries(element)) {
        // console.log(document.querySelector('#sheet' + (index + 1) + ' [data-cell=' + key + ']').value = value)
        sheet = $('#sheet' + (index + 1)).calx('getSheet');
        cell = sheet.getCell(key);
        cell.setValue(((value) / 100));
        cell.renderComputedValue();
    }
}




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
            openSnack();
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

$(".exportXLS").on("click", function(event) {
    id = $(this).data("id");
    sheetName = document.querySelector(".container" + id).dataset.title;
    filename = sheetName + '_' + getFormattedTime();

    $('[id^=sheet]').table2excel({
        exclude: ".hidden",
        name: "Worksheet Name",
        filename: filename, //do not include extension
        sheetName: sheetName,
        fileext: ".xls", // file extension
        preserveColors: true,
        exclude_inputs: false
    });

    // var table2excel = new Table2Excel();
    // table2excel.export(document.querySelectorAll("[id^=sheet]"));

    // filename = "./Deal Value Calc.xlsx"
    // console.log($('[id^=sheet]'))


    // var files = inputElement.files || [];
    // if (!files.length) return;
    // var file = files[0];

    // console.time();
    // var reader = new FileReader();
    // reader.onloadend = function(event) {
    //     var arrayBuffer = reader.result;
    //     // var buffer = Buffer.from(arrayBuffer)
    //     // debugger

    //     var workbook = new ExcelJS.Workbook();
    //     // workbook.xlsx.read(buffer)
    //     workbook.xlsx.load(arrayBuffer).then(function(workbook) {
    //         console.timeEnd();
    //         var result = ''
    //         workbook.worksheets.forEach(function(sheet) {
    //             sheet.eachRow(function(row, rowNumber) {
    //                 result += row.values + ' | \n'
    //             })
    //         })
    //         result2.innerHTML = result
    //     });
    // };
    // reader.readAsArrayBuffer(filename);

    // var wb = XLSX.utils.book_new();

    // $('[id^=sheet]').each(function(i, o) {

    //     e = o;
    //     e.settings = {
    //         exclude: ".hidden",
    //         name: "Worksheet Name",
    //         filename: filename, //do not include extension
    //         sheetName: sheetName,
    //         fileext: ".xls", // file extension
    //         preserveColors: true,
    //         exclude_inputs: false
    //     }
    //     e.tableRows = [];

    //     var sheet = $(o).calx('getSheet');

    //     var tempRows = "";
    //     $(o).find("tr").not(e.settings.exclude).each(function(i, p) {

    //         // Reset for this row
    //         additionalStyles = "";

    //         // Preserve background and text colors on the row
    //         if (e.settings.preserveColors) {
    //             compStyle = getComputedStyle(p);
    //             additionalStyles += (compStyle && compStyle.backgroundColor ? "background-color: " + compStyle.backgroundColor + ";" : "");
    //             additionalStyles += (compStyle && compStyle.color ? "color: " + compStyle.color + ";" : "");
    //         }

    //         // Create HTML for Row
    //         tempRows += "<tr style='" + additionalStyles + "'>";

    //         // Loop through each TH and TD
    //         $(p).find("td,th").not(e.settings.exclude).each(function(i, q) { // p did not exist, I corrected

    //             // Reset for this column
    //             additionalStyles = "";

    //             // Preserve background and text colors on the row
    //             if (e.settings.preserveColors) {
    //                 compStyle = getComputedStyle(q);
    //                 additionalStyles += (compStyle && compStyle.backgroundColor ? "background-color: " + compStyle.backgroundColor + ";" : "");
    //                 additionalStyles += (compStyle && compStyle.color ? "color: " + compStyle.color + ";" : "");
    //                 additionalStyles += (compStyle && compStyle.fontWeight ? "font-weight: " + compStyle.fontWeight + ";" : "");
    //                 additionalStyles += (compStyle && compStyle.textAlign ? "text-align: " + compStyle.textAlign + ";" : "");
    //                 additionalStyles += (compStyle && compStyle.verticalAlign ? "vertical-align: " + compStyle.verticalAlign + ";" : "");
    //             }

    //             var rc = {
    //                 rows: $(this).attr("rowspan"),
    //                 cols: $(this).attr("colspan"),
    //                 flag: $(q).find(e.settings.exclude)
    //             };

    //             if (rc.flag.length > 0) {
    //                 tempRows += "<td> </td>"; // exclude it!!
    //             } else {
    //                 tempRows += "<td";
    //                 if (rc.rows > 0) {
    //                     tempRows += " rowspan='" + rc.rows + "' ";
    //                 }
    //                 if (rc.cols > 0) {
    //                     tempRows += " colspan='" + rc.cols + "' ";
    //                 }
    //                 if (additionalStyles) {
    //                     tempRows += " style='" + additionalStyles + "'";
    //                 }


    //                 var cell_element = $(q).find("input,select")[0];
    //                 if (cell_element) {

    //                     additionalStyles = "";
    //                     if (e.settings.preserveColors) {
    //                         compStyle = getComputedStyle(cell_element);
    //                         additionalStyles += (compStyle && compStyle.backgroundColor ? "background-color: " + compStyle.backgroundColor + ";" : "");
    //                         additionalStyles += (compStyle && compStyle.color ? "color: " + compStyle.color + ";" : "");
    //                         additionalStyles += (compStyle && compStyle.fontWeight ? "font-weight: " + compStyle.fontWeight + ";" : "");
    //                         additionalStyles += (compStyle && compStyle.textAlign ? "text-align: " + compStyle.textAlign + ";" : "");
    //                         additionalStyles += (compStyle && compStyle.verticalAlign ? "vertical-align: " + compStyle.verticalAlign + ";" : "");

    //                     }
    //                     if (additionalStyles) {
    //                         tempRows += " style='" + additionalStyles + "'";
    //                     }
    //                     var cell = sheet.getCell($(cell_element).data("cell"));

    //                     var formatted_val = cell.getFormula();
    //                     if (formatted_val) {
    //                         formatted_val = "=" + formatted_val.replaceAll('\'', '"')
    //                     } else {
    //                         formatted_val = cell.getFormattedValue();
    //                         if (!formatted_val) {
    //                             formatted_val = numeral(0).format($(cell_element).data("format"));
    //                         }
    //                     }
    //                     tempRows += ">" + formatted_val + "</td>";
    //                 } else {
    //                     tempRows += ">" + $(q).html() + "</td>";
    //                 }

    //             }
    //         });

    //         tempRows += "</tr>";

    //     });


    //     e.tableRows.push(tempRows);

    //     table = "<table style=''>" + tempRows + "</table>"
    //     console.log(table)
    //         // var doc = new DOMParser().parseFromString(table, "text/xml");
    //     var e = document.createElement('div');
    //     e.setAttribute('style', 'display: none;');
    //     e.innerHTML = table;
    //     document.body.appendChild(e);

    //     console.log(e.querySelector('table'))
    //     var ws = XLSX.utils.table_to_sheet(e.querySelector('table'));



    //     XLSX.utils.book_append_sheet(wb, ws, "sheet" + i);

    //     document.body.removeChild(e)

    // });

    // XLSX.writeFile(wb, 'out.xlsx');

    // var url = "Deal Value Calc.xlsx";

    // /* set up async GET request */
    // var req = new XMLHttpRequest();
    // req.open("GET", url, true);
    // req.responseType = "arraybuffer";

    // req.onload = function(e) {
    //     var data = new Uint8Array(req.response);
    //     var workbook = XLSX.read(data, { type: "array" });
    //     console.log(workbook)
    //     XLSX.writeFile(workbook, 'out.xlsx');
    //     /* DO SOMETHING WITH workbook HERE */
    // }

    // req.send();


});