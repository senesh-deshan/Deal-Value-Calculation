$("#totalRevenue1").change(function(event) {
    $("#totalRevenue1").val(parseFloat(($("#totalRevenue1")[0].value.replace(/,/g, '') || '0')));
    $("#bookValue1").val(event.target.value * 3 / 100);
    recalc1(this);
});
$("#bookValue1").change(function(event) {
    $("#totalRevenue1").val(0);
    recalc1(this);
});
$("#percentOfStores").change(function(event) {
    recalc1(this);
});
//--------------------------------------------------
$("#weChatSelect").change(function(event) {
    $("#weChatPercent").val(event.target.value);
    recalc1(this);
});
$("#aliPaySelect").change(function(event) {
    $("#aliPayPercent").val(event.target.value);
    recalc1(this);
});
$("#unionPaySelect").change(function(event) {
    $("#unionPayPercent").val(event.target.value);
    recalc1(this);
});
$("#CUP_QRSelect").change(function(event) {
    $("#CUP_QRPercent").val(event.target.value);
    recalc1(this);
});
//--------------------------------------------------
$("#inStoreSelect").change(function(event) {
    $("#inStorePercent").val(event.target.value);
    recalc1(this);
});
$("#remoteSelect").change(function(event) {
    $("#remotePercent").val(event.target.value);
    recalc1(this);
});
$("#ecommerceSelect").change(function(event) {
    $("#ecommercePercent").val(event.target.value);
    recalc1(this);
});
//--------------------------------------------------
$("#prevDealValInstore").change(function(event) {
    recalc1(this);
});
$("#prevDealValPayByLink").change(function(event) {
    recalc1(this);
});
$("#prevDealValEcommerce").change(function(event) {
    recalc1(this);
});


function recalc1(target) {

    $("#totalRevenue1").val(parseFloat(($("#totalRevenue1")[0].value.replace(/,/g, '') || '0')));

    $("#bookValue1").val(parseFloat(($("#bookValue1")[0].value.replace(/,/g, '') || '0')));

    $("#totDealValInstore").val(parseFloat(($("#totDealValInstore")[0].value.replace(/,/g, '') || '0')));
    $("#totDealValPayByLink").val(parseFloat(($("#totDealValPayByLink")[0].value.replace(/,/g, '') || '0')));
    $("#totDealValEcommerce").val(parseFloat(($("#totDealValEcommerce")[0].value.replace(/,/g, '') || '0')));

    $("#prevDealValInstore").val(parseFloat(($("#prevDealValInstore")[0].value.replace(/,/g, '') || '0')));
    $("#prevDealValPayByLink").val(parseFloat(($("#prevDealValPayByLink")[0].value.replace(/,/g, '') || '0')));
    $("#prevDealValEcommerce").val(parseFloat(($("#prevDealValEcommerce")[0].value.replace(/,/g, '') || '0')));




    var totDealValue = parseFloat($("#bookValue1")[0].value) * parseFloat($("#percentOfStores")[0].value / 100) * (parseFloat($("#weChatPercent")[0].value) + parseFloat($("#aliPayPercent")[0].value) + parseFloat($("#unionPayPercent")[0].value) + parseFloat($("#CUP_QRPercent")[0].value)) / 100
        // console.log(totDealValue);
    $("#totDealValInstore").val(parseFloat(totDealValue * parseFloat($("#inStorePercent")[0].value) / 100));
    $("#totDealValPayByLink").val(parseFloat(totDealValue * parseFloat($("#remotePercent")[0].value) / 100));
    $("#totDealValEcommerce").val(parseFloat(totDealValue * parseFloat($("#ecommercePercent")[0].value) / 100));

    $("#finalDealValInstore").val(parseFloat(parseFloat($("#totDealValInstore")[0].value - parseFloat($("#prevDealValInstore")[0].value))));
    $("#finalDealValPayByLink").val(parseFloat(parseFloat($("#totDealValPayByLink")[0].value - parseFloat($("#prevDealValPayByLink")[0].value))));
    $("#finalDealValEcommerce").val(parseFloat(parseFloat($("#totDealValEcommerce")[0].value - parseFloat($("#prevDealValEcommerce")[0].value))));



    $("#totalRevenue1").val(parseFloat(($("#totalRevenue1")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#bookValue1").val(parseFloat(($("#bookValue1")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#totDealValInstore").val(parseFloat(($("#totDealValInstore")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#totDealValPayByLink").val(parseFloat(($("#totDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#totDealValEcommerce").val(parseFloat(($("#totDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#prevDealValInstore").val(parseFloat(($("#prevDealValInstore")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#prevDealValPayByLink").val(parseFloat(($("#prevDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#prevDealValEcommerce").val(parseFloat(($("#prevDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#finalDealValInstore").val(parseFloat(($("#finalDealValInstore")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#finalDealValPayByLink").val(parseFloat(($("#finalDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    $("#finalDealValEcommerce").val(parseFloat(($("#finalDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());
}

$("#totalRevenue2").change(function(event) {
    $("#totalRevenue2").val(parseFloat(($("#totalRevenue2")[0].value.replace(/,/g, '') || '0')));
    $("#bookValue2").val(event.target.value * 5 / 100);
    recalc2(this);
});
$("#bookValue2").change(function(event) {
    $("#totalRevenue2").val(0);
    recalc2(this);
});
$("#percentOfStores2").change(function(event) {
    recalc2(this);
});
//--------------------------------------------------
$("#paypalSelect").change(function(event) {
    $("#paypalPercent").val(event.target.value);
    recalc2(this);
});
$("#venmoSelect").change(function(event) {
    $("#venmomPercent").val(event.target.value);
    recalc2(this);
});
//--------------------------------------------------
$("#inStoreSelect2").change(function(event) {
    $("#inStorePercent2").val(event.target.value);
    recalc2(this);
});
//--------------------------------------------------
$("#prevDealValInstore2").change(function(event) {
    recalc2(this);
});

$("#paypalSelect").val(50).trigger("change");
$("#venmoSelect").val(50).trigger("change");


function recalc2(target) {

    $("#totalRevenue2").val(parseFloat(($("#totalRevenue2")[0].value.replace(/,/g, '') || '0')));

    $("#bookValue2").val(parseFloat(($("#bookValue2")[0].value.replace(/,/g, '') || '0')));

    $("#totDealValInstore2").val(parseFloat(($("#totDealValInstore2")[0].value.replace(/,/g, '') || '0')));
    //    $("#totDealValPayByLink").val(parseFloat(($("#totDealValPayByLink")[0].value.replace(/,/g, '') || '0')));
    //   $("#totDealValEcommerce").val(parseFloat(($("#totDealValEcommerce")[0].value.replace(/,/g, '') || '0')));

    $("#prevDealValInstore2").val(parseFloat(($("#prevDealValInstore2")[0].value.replace(/,/g, '') || '0')));
    //  $("#prevDealValPayByLink").val(parseFloat(($("#prevDealValPayByLink")[0].value.replace(/,/g, '') || '0')));
    //  $("#prevDealValEcommerce").val(parseFloat(($("#prevDealValEcommerce")[0].value.replace(/,/g, '') || '0')));




    var totDealValue = parseFloat($("#bookValue2")[0].value) * parseFloat($("#percentOfStores2")[0].value / 100) * (parseFloat($("#paypalPercent")[0].value) + parseFloat($("#venmomPercent")[0].value)) / 100
        // console.log(totDealValue);
    $("#totDealValInstore2").val(parseFloat(totDealValue * parseFloat($("#inStorePercent2")[0].value) / 100));
    //   $("#totDealValPayByLink").val(parseFloat(totDealValue * parseFloat($("#remotePercent")[0].value) / 100));
    //   $("#totDealValEcommerce").val(parseFloat(totDealValue * parseFloat($("#ecommercePercent")[0].value) / 100));

    $("#finalDealValInstore2").val(parseFloat(parseFloat($("#totDealValInstore2")[0].value - parseFloat($("#prevDealValInstore2")[0].value))));
    // $("#finalDealValPayByLink").val(parseFloat(parseFloat($("#totDealValPayByLink")[0].value - parseFloat($("#prevDealValPayByLink")[0].value))));
    // $("#finalDealValEcommerce").val(parseFloat(parseFloat($("#totDealValEcommerce")[0].value - parseFloat($("#prevDealValEcommerce")[0].value))));



    $("#totalRevenue2").val(parseFloat(($("#totalRevenue2")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#bookValue2").val(parseFloat(($("#bookValue2")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#totDealValInstore2").val(parseFloat(($("#totDealValInstore2")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#totDealValPayByLink").val(parseFloat(($("#totDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#totDealValEcommerce").val(parseFloat(($("#totDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#prevDealValInstore2").val(parseFloat(($("#prevDealValInstore2")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#prevDealValPayByLink").val(parseFloat(($("#prevDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#prevDealValEcommerce").val(parseFloat(($("#prevDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());

    $("#finalDealValInstore2").val(parseFloat(($("#finalDealValInstore2")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#finalDealValPayByLink").val(parseFloat(($("#finalDealValPayByLink")[0].value.replace(/,/g, '') || '0')).toLocaleString());
    //  $("#finalDealValEcommerce").val(parseFloat(($("#finalDealValEcommerce")[0].value.replace(/,/g, '') || '0')).toLocaleString());
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


$("#exportJPG1").on("click", function(event) {
    html2canvas(document.querySelector(".container1"), { scrollY: -window.pageYOffset }).then(canvas => {
        Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height)
    });
});
$("#copyJPG1").on("click", function(event) {
    html2canvas(document.querySelector(".container1"), { scrollY: -window.pageYOffset }).then(canvas => {
        canvas.toBlob(blob => {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            //alert("Copied to clipboard")
        })
    });
});
$("#exportPDF1").on("click", function(event) {
    html2canvas(document.querySelector(".container1"), { scrollY: -window.pageYOffset }).then(canvas => {
        const doc = window.jspdf.jsPDF({ unit: 'px', format: [canvas.width, canvas.height] });
        var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height)
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save();
    });
});

//-------------------------------------

$("#exportJPG2").on("click", function(event) {
    html2canvas(document.querySelector(".container2"), { scrollY: -window.pageYOffset }).then(canvas => {
        Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height)
    });
});
$("#copyJPG2").on("click", function(event) {
    html2canvas(document.querySelector(".container2"), { scrollY: -window.pageYOffset }).then(canvas => {
        canvas.toBlob(blob => {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            //alert("Copied to clipboard")
        })
    });
});
$("#exportPDF2").on("click", function(event) {
    html2canvas(document.querySelector(".container2"), { scrollY: -window.pageYOffset }).then(canvas => {
        const doc = window.jspdf.jsPDF({ unit: 'px', format: [canvas.width, canvas.height] });
        var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height)
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save();
    });
});