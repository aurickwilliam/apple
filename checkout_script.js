const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var iphone_names = ["iPhone 14 Pro", "iPhone 14", "iPhone 13", "iPhone SE", "iPhone 12"];
var iphone_price = ["70,990", "56,990", "42,990", "30,990", "42,990"];

var iphone14Pro_types = ["iPhone 14 Pro", "iPhone 14 Pro Max"];
var iphone14Pro_desc = ["6.1-inch display", "6.7-inch display"];
var iphone14Pro_price = ["70,990", "77,990"];

var iphone14_types = ["iPhone 14", "iPhone 14 Plus"];
var iphone14_desc = ["6.1-inch display", "6.7-inch display"];
var iphone14_price = ["56,990", "63,990"];

var iphone13_types = ["iPhone 13 mini", "iPhone 13"];
var iphone13_desc = ["5.4-inch display", "6.1-inch display"];
var iphone13_price = ["42,990", "49,990"];

//color
var iphone14Pro_colorname = ["Deep Purple", "Gold", "Silver", "Black"]
var iphone14Pro_color = ["#655C6F", "#F4E8CE", "#F2F4F3", "#53514F"];

var iphone14_colorname = ["Blue", "Purple", "Midnight", "Starlight"]
var iphone14_color = ["#A7BACB", "#E5DDEA", "#353C44", "#FAF7F2"];

var iphone13_colorname = ["Blue", "Pink", "Midnight", "Starlight"]
var iphone13_color = ["#447792", "#FBE2DD", "#43484E", "#FBF7F4"];

var iphoneSE_colorname = ["Midnight", "Starlight", "(PRODUCT) RED", "Deep Purple"]
var iphoneSE_color = ["#353C43", "#FAF7F2", "#BA0C2F", "#655C6F"];

var iphone12_colorname = ["Blue", "Purple", "Green", "(PRODUCT) RED"]
var iphone12_color = ["#164A6F", "#BDB6E9", "#DAF0D9", "#DB3D3D"];

//storage
var iphone14Pro_mem = ["128GB", "256GB", "512GB"];
var iphone14Pro_memprice = ["70,990", "77,990", "89,990"];
var iphone14ProMax_memprice = ["77,990", "84,990", "96,990"];


var iphone14_mem = ["128GB", "256GB", "512GB"];
var iphone14_memprice = ["56,990", "63,990", "75,990"];
var iphone14Plus_memprice = ["63,990", "70,990", "82,990"];

var iphone13_mem = ["128GB", "256GB", "512GB"];
var iphone13mini_memprice = ["42,990", "49,990", "61,990"];
var iphone13_memprice = ["49,990", "56,990", "68,990"];

var iphoneSE_mem = ["64GB", "128GB", "256GB"];
var iphoneSE_memprice = ["30,990", "33,990", "40,990"];

var iphone12_mem = ["64GB", "128GB", "256GB"];
var iphone12_memprice = ["42,990", "45,990", "52,990"];

$(function () {
    if (name == "iphone14pro") {
        $(".name").text(iphone_names[0]);
        $(".price").text(iphone_price[0]);
        for (i = 1; i < 5; i++) {
            $("." + i).attr("src", "img/iphone14Pro/" + i + ".jpg");
        }
        $(".first_type").text(iphone14Pro_types[0]);
        $(".second_type").text(iphone14Pro_types[1]);

        $(".first_desc").text(iphone14Pro_desc[0]);
        $(".second_desc").text(iphone14Pro_desc[1]);

        $(".first_price").text(iphone14Pro_price[0]);
        $(".second_price").text(iphone14Pro_price[1]);

        for (i = 0; i < 5; i++) {
            $(".color" + i).css("background-color", iphone14Pro_color[i]);
        }

        for (i = 0; i < 3; i++) {
            $(".mem" + i).text(iphone14Pro_mem[i]);
            $(".mem" + i + "_price").text(iphone14Pro_memprice[i]);
        }
    } else if (name == "iphone14") {
        $(".name").text(iphone_names[1]);
        $(".price").text(iphone_price[1]);
        for (i = 1; i < 5; i++) {
            $("." + i).attr("src", "img/iphone14/" + i + ".jpg");
        }
        $(".first_type").text(iphone14_types[0]);
        $(".second_type").text(iphone14_types[1]);

        $(".first_desc").text(iphone14_desc[0]);
        $(".second_desc").text(iphone14_desc[1]);

        $(".first_price").text(iphone14_price[0]);
        $(".second_price").text(iphone14_price[1]);

        for (i = 0; i < 5; i++) {
            $(".color" + i).css("background-color", iphone14_color[i]);
        }
        for (i = 0; i < 3; i++) {
            $(".mem" + i).text(iphone14_mem[i]);
            $(".mem" + i + "_price").text(iphone14_memprice[i]);
        }
    } else if (name == "iphone13") {
        $(".name").text(iphone_names[2]);
        $(".price").text(iphone_price[2]);
        for (i = 1; i < 5; i++) {
            $("." + i).attr("src", "img/iphone13/" + i + ".jpg");
        }
        $(".first_type").text(iphone13_types[0]);
        $(".second_type").text(iphone13_types[1]);

        $(".first_desc").text(iphone13_desc[0]);
        $(".second_desc").text(iphone13_desc[1]);

        $(".first_price").text(iphone13_price[0]);
        $(".second_price").text(iphone13_price[1]);

        for (i = 0; i < 5; i++) {
            $(".color" + i).css("background-color", iphone13_color[i]);
        }
        for (i = 0; i < 3; i++) {
            $(".mem" + i).text(iphone13_mem[i]);
            $(".mem" + i + "_price").text(iphone13mini_memprice[i]);
        }
    } else if (name == "iphoneSE") {
        $(".name").text(iphone_names[3]);
        $(".price").text(iphone_price[3]);
        for (i = 1; i < 5; i++) {
            $("." + i).attr("src", "img/iphoneSE/" + i + ".jpg");
        }
        $(".model_desc").hide();
        $(".type").hide();

        for (i = 0; i < 5; i++) {
            $(".color" + i).css("background-color", iphoneSE_color[i]);
        }
        for (i = 0; i < 3; i++) {
            $(".mem" + i).text(iphoneSE_mem[i]);
            $(".mem" + i + "_price").text(iphoneSE_memprice[i]);
        }
    } else if (name == "iphone12") {
        $(".name").text(iphone_names[4]);
        $(".price").text(iphone_price[4]);
        for (i = 1; i < 5; i++) {
            $("." + i).attr("src", "img/iphone12/" + i + ".jpg");
        }
        $(".model_desc").hide();
        $(".type").hide();

        for (i = 0; i < 5; i++) {
            $(".color" + i).css("background-color", iphone12_color[i]);
        }
        for (i = 0; i < 3; i++) {
            $(".mem" + i).text(iphone12_mem[i]);
            $(".mem" + i + "_price").text(iphone12_memprice[i]);
        }
    }
    var type1 = false;
    var type2 = false;
    $(".first").click(function () {
        if (!type2) {
            $(this).css("border", "3px solid #66B1FC");
            type1 = true;
        } else if (type2) {
            $(this).css("border", "3px solid #66B1FC");
            $(".second").css("border", "1px solid #949393");
            type1 = true;
            type2 = false;
        }
        if (name == "iphone14pro") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone14Pro_memprice[i]);
            }
        } else if (name == "iphone14") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone14_memprice[i]);
            }
        } else if (name == "iphone13") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone13mini_memprice[i]);
            }
        }
    });
    $(".second").click(function () {
        if (!type1) {
            $(this).css("border", "3px solid #66B1FC");
            type2 = true;
        } else if (type1) {
            $(this).css("border", "3px solid #66B1FC");
            $(".first").css("border", "1px solid #949393");
            type2 = true;
            type1 = false;
        }
        if (name == "iphone14pro") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone14ProMax_memprice[i]);
            }
        } else if (name == "iphone14") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone14Plus_memprice[i]);
            }
        } else if (name == "iphone13") {
            for (i = 0; i < 3; i++) {
                $(".mem" + i + "_price").text(iphone13_memprice[i]);
            }
        }
    });
    var col0 = false;
    var col1 = false;
    var col2 = false;
    var col3 = false;

    $(".color0").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        col0 = true;
        col1 = false;
        col2 = false;
        col3 = false;
        if (name == "iphone14pro") {
            $(".color_name").text(iphone14Pro_colorname[0]);
        } else if (name == "iphone14") {
            $(".color_name").text(iphone14_colorname[0]);
        } else if (name == "iphone13") {
            $(".color_name").text(iphone13_colorname[0]);
        } else if (name == "iphoneSE") {
            $(".color_name").text(iphoneSE_colorname[0]);
        } else if (name == "iphone12") {
            $(".color_name").text(iphone12_colorname[0]);
        }
        $(".color1").css("border", "2px solid #dfdfdf");
        $(".color2").css("border", "2px solid #dfdfdf");
        $(".color3").css("border", "2px solid #dfdfdf");
    });
    $(".color1").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        col1 = true;
        col0 = false;
        col2 = false;
        col3 = false;
        if (name == "iphone14pro") {
            $(".color_name").text(iphone14Pro_colorname[1]);
        } else if (name == "iphone14") {
            $(".color_name").text(iphone14_colorname[1]);
        } else if (name == "iphone13") {
            $(".color_name").text(iphone13_colorname[1]);
        } else if (name == "iphoneSE") {
            $(".color_name").text(iphoneSE_colorname[1]);
        } else if (name == "iphone12") {
            $(".color_name").text(iphone12_colorname[1]);
        }
        $(".color0").css("border", "2px solid #dfdfdf");
        $(".color2").css("border", "2px solid #dfdfdf");
        $(".color3").css("border", "2px solid #dfdfdf");
    });
    $(".color2").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        col2 = true;
        col1 = false;
        col0 = false;
        col3 = false;
        if (name == "iphone14pro") {
            $(".color_name").text(iphone14Pro_colorname[2]);
        } else if (name == "iphone14") {
            $(".color_name").text(iphone14_colorname[2]);
        } else if (name == "iphone13") {
            $(".color_name").text(iphone13_colorname[2]);
        } else if (name == "iphoneSE") {
            $(".color_name").text(iphoneSE_colorname[2]);
        } else if (name == "iphone12") {
            $(".color_name").text(iphone12_colorname[2]);
        }
        $(".color1").css("border", "2px solid #dfdfdf");
        $(".color0").css("border", "2px solid #dfdfdf");
        $(".color3").css("border", "2px solid #dfdfdf");
    });
    $(".color3").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        col3 = true;
        col1 = false;
        col2 = false;
        col0 = false;
        if (name == "iphone14pro") {
            $(".color_name").text(iphone14Pro_colorname[3]);
        } else if (name == "iphone14") {
            $(".color_name").text(iphone14_colorname[3]);
        } else if (name == "iphone13") {
            $(".color_name").text(iphone13_colorname[3]);
        } else if (name == "iphoneSE") {
            $(".color_name").text(iphoneSE_colorname[3]);
        } else if (name == "iphone12") {
            $(".color_name").text(iphone12_colorname[3]);
        }
        $(".color1").css("border", "2px solid #dfdfdf");
        $(".color2").css("border", "2px solid #dfdfdf");
        $(".color0").css("border", "2px solid #dfdfdf");
    });


    var mem0 = false;
    var mem1 = false;
    var mem2 = false;
    $(".memory0").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        mem0 = true;
        mem1 = false;
        mem2 = false;
        $(".memory1").css("border", "1.5px solid #949393");
        $(".memory2").css("border", "1.5px solid #949393");
        $(".final").text($(".mem0_price").text());
    });
    $(".memory1").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        mem1 = true;
        mem0 = false;
        mem2 = false;
        $(".memory0").css("border", "1.5px solid #949393");
        $(".memory2").css("border", "1.5px solid #949393");
        $(".final").text($(".mem1_price").text());
    });
    $(".memory2").click(function () {
        $(this).css("border", "3px solid #66B1FC");
        mem2 = true;
        mem1 = false;
        mem0 = false;
        $(".memory1").css("border", "1.5px solid #949393");
        $(".memory0").css("border", "1.5px solid #949393");

        $(".final").text($(".mem2_price").text());
    });
    var type = "";
    var color = "";
    var gb = "";
    var price = 0;
    $("button").click(function () {
        var def_name = $(".name").text();
        if (def_name == "iPhone 14 Pro" || def_name == "iPhone 14" || def_name == "iPhone 13") {
            if (!type2 && type1) {
                type = $(".first_type").text();
            } else if (!type1 && type2) {
                type = $(".second_type").text();
            } else if (!type1 && !type2) {
                alert("Please Pick a Model Type!");
            }
        } else {
            type = def_name;
        }

        if (!col0 && !col1 && !col2 && !col3) {
            alert("Please Pick a Color!");
        } else {
            color = $(".color_name").text();
        }

        if (!mem0 && !mem1 && !mem2) {
            alert('Please pick a Storage!');
        } else if(mem0){
            if (name == "iphone14pro") {
                if (type1) {
                    gb = iphone14Pro_mem[0];
                    price = iphone14Pro_memprice[0];
                } else if (type2) {
                    gb = iphone14Pro_mem[0];
                    price = iphone14ProMax_memprice[0];
                }
            } else if (name == "iphone14") {
                if (type1) {
                    gb = iphone14_mem[0];
                    price = iphone14_memprice[0];
                } else if (type2) {
                    gb = iphone14_mem[0];
                    price = iphone14Plus_memprice[0];
                }
            } else if (name == "iphone13") {
                if (type1) {
                    gb = iphone13_mem[0];
                    price = iphone13mini_memprice[0];
                } else if (type2) {
                    gb = iphone13_mem[0];
                    price = iphone13_memprice[0];
                }
            } else if (name == "iphoneSE") {
                gb = iphoneSE_mem[0];
                price = iphoneSE_memprice[0];
            } else if (name == "iphone12") {
                gb = iphone12_mem[0];
                price = iphone12_memprice[0];
            }
        } else if (mem1) {
            if (name == "iphone14pro") {
                if (type1) {
                    gb = iphone14Pro_mem[1];
                    price = iphone14Pro_memprice[1];
                } else if (type2) {
                    gb = iphone14Pro_mem[1];
                    price = iphone14ProMax_memprice[1];
                }
            } else if (name == "iphone14") {
                if (type1) {
                    gb = iphone14_mem[1];
                    price = iphone14_memprice[1];
                } else if (type2) {
                    gb = iphone14_mem[1];
                    price = iphone14Plus_memprice[1];
                }
            } else if (name == "iphone13") {
                if (type1) {
                    gb = iphone13_mem[1];
                    price = iphone13mini_memprice[1];
                } else if (type2) {
                    gb = iphone13_mem[1];
                    price = iphone13_memprice[1];
                }
            } else if (name == "iphoneSE") {
                gb = iphoneSE_mem[1];
                price = iphoneSE_memprice[1];
            } else if (name == "iphone12") {
                gb = iphone12_mem[1];
                price = iphone12_memprice[1];
            }
        } else if (mem2) {
            if (name == "iphone14pro") {
                if (type1) {
                    gb = iphone14Pro_mem[2];
                    price = iphone14Pro_memprice[2];
                } else if (type2) {
                    gb = iphone14Pro_mem[2];
                    price = iphone14ProMax_memprice[2];
                }
            } else if (name == "iphone14") {
                if (type1) {
                    gb = iphone14_mem[2];
                    price = iphone14_memprice[2];
                } else if (type2) {
                    gb = iphone14_mem[2];
                    price = iphone14Plus_memprice[2];
                }
            } else if (name == "iphone13") {
                if (type1) {
                    gb = iphone13_mem[2];
                    price = iphone13mini_memprice[2];
                } else if (type2) {
                    gb = iphone13_mem[2];
                    price = iphone13_memprice[2];
                }
            } else if (name == "iphoneSE") {
                gb = iphoneSE_mem[2];
                price = iphoneSE_memprice[2];
            } else if (name == "iphone12") {
                gb = iphone12_mem[2];
                price = iphone12_memprice[2];
            }
        }
        var money = $(".input_money").val();
        var final_mon = money.replace(",", "");
        if (price < final_mon) {
            alert("You have purchased:\n\n" + type + "\nColor: " + color + "\nMemory: " + gb + "\nTotal Price: " + price + "\n\nThank you for choosing Apple!");
        } else {
            alert("Invalid Input! Short payment!");
        }
        
        
    });
});
