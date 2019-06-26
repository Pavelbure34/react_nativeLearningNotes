$(document).ready(
    ()=>{
        //App.Notes.Day01();
    }
);

const Notes = {
    Day01:()=>{
        $("#contentView").html(pages.d01);
        $("#img1").attr("src","img/day01/ReactNative.PNG")
                .css({
                    "width":"261px",
                    "height":"448px",
                    "margin-left":"40px",
                    "margin-top":"10px",
        });
    },
    Day02:()=>{
        $("#contentView").html(pages.d02);
        $("#imgSide").css({
            "height":"330px",
            "width":"300px"
        });
        $("#imgSide img").attr("src","img/day01/basicIndex.png")
                .css({
                    "height":"325px",
                    "width":"290px"
                });
        $("#textSide").css({
            "width":"330px",
            "height":"300px",
            "overflow":"auto"
        });
    },
    Day03:()=>{
        $("#contentView").html(pages.d03);
        $("#divideBox1").css({
            "width":"700px",
            "height":"405px"
        });
        $("#imgSide1").css({
            "width":"350px",
            "height":"403px"
        });
        $("#imgSide1 img")
            .attr("src","./img/day03/childComp.png")
            .css({
                "width":"344px",
                "height":"403px"
        });
        $("#textSide1").css({
            "width":"350px",
            "height":"403px",
            "overflow":"auto"
        });
            $("#divideBox2").css({
            "width":"700px",
            "height":"400px"
        });
        $("#imgSide2").css({
            "width":"350px",
            "height":"340px"
        });
        $("#imgSide2 img")
            .attr("src","./img/day03/nestedComp.png")
            .css({
                "width":"350px",
                "height":"330px"
        });
        $("#textSide2").css({
            "width":"350px",
            "height":"400px",
            "overflow":"auto"
        });
    },
    Day04:()=>{
        $("#contentView").html(pages.d04);
    },
    Day05:()=>{
        $("#contentView").html(pages.d05);
    },
    Day06:()=>{
        $("#contentView").html(pages.d06);
    },
    Day07:()=>{
        $("#contentView").html(pages.d07);
    },
    Day08:()=>{
        $("#contentView").html(pages.d08);
    },
    Day09:()=>{
        $("#contentView").html(pages.d09);
    },
    Day10:()=>{
        $("#contentView").html(pages.d10);
    },
    Day11:()=>{
        $("#contentView").html(pages.d11);
    },
    Day12:()=>{
        $("#contentView").html(pages.d12);
    },
    Day13:()=>{
        $("#contentView").html(pages.d13);
    },
    Day14:()=>{
        $("#contentView").html(pages.d14);
    },
    Day15:()=>{
        $("#contentView").html(pages.d15);
    },
    Day16:()=>{
        $("#contentView").html(pages.d16);
    },
    Day17:()=>{
        $("#contentView").html(pages.d17);
    },
    Day18:()=>{
        let effInt = 0;
        let procInt = 0;
        let effect = [
            "./img/day18/effect1.png",
            "./img/day18/effect2.png",
            "./img/day18/effect3.png"
        ];
        let effText = [
            "when it is false",
            "when it is true",
            "back to false"
        ];
        let proc = [
            "./img/day18/proc1.png",
            "./img/day18/proc2.png"
        ];
        let procText = [
            "new state and auth change on state",
            "helper and conditional rendering"
        ]
        $("#contentView").html(pages.d18);
        $("#effect img").attr("src",effect[effInt]);
        $("#effect sub span").html(effText[effInt]);
        $("#codingProc img").attr("src",proc[procInt]);
        $("#codingProc sub span").html(procText[procInt]);
        $("#procBtn1").click(()=>{
            if (procInt != 0){
                procInt--;
                $("#codingProc img").attr("src",proc[procInt]);
                $("#codingProc sub span").html(procText[procInt]);
            }
        });
        $("#procBtn2").click(()=>{
            if (procInt < 2){
                procInt++;
                $("#codingProc img").attr("src",proc[procInt]);
                $("#codingProc sub span").html(procText[procInt]);
            }
        });
        $("#effectBtn1").click(()=>{
            if (effInt != 0){
                effInt--;
                $("#effect img").attr("src",effect[effInt]);
                $("#effect sub span").html(effText[effInt]);
            }
        });
        $("#effectBtn2").click(()=>{
            if (effInt < 3){
                effInt++;
                $("#effect img").attr("src",effect[effInt]);
                $("#effect sub span").html(effText[effInt]);
            }
        });
    },
    Day19:()=>{
        $("#contentView").html(pages.d19);
    },
    Day20:()=>{
        $("#contentView").html(pages.d20);
    },
    Day21:()=>{
        let photos = [
            './img/day20/importProvider_wrap.png',
            './img/day20/index_js_in_reducers.png',
            './img/day20/reducerInStore.png',
            './img/day20/stateToProps.png',
            './img/day20/reducerWorking.png'
        ];
        let subText = [
            'Provder from react-redux class',
            'combineReducer',
            'reducer in store',
            'connecting component to redux',
            'reducer returning state as props'
        ];
        let index = 0;
        $("#contentView").html(pages.d21);
        $("#imgBox img").attr("src",photos[index]);
        $("#imgBox sub").html(subText[index]);
        $("#prevBtn").click(()=>{
            if (index >= 1)
                index--;
            $("#imgBox img").attr("src",photos[index]);
            $("#imgBox sub").html(subText[index]);
        });
        $("#nxtBtn").click(()=>{
            if (index < 4)
                index++;
            $("#imgBox img").attr("src",photos[index]);
            $("#imgBox sub").html(subText[index]);
        })
    },
    Day22:()=>{
        $("#contentView").html(pages.d22);
    }
};

