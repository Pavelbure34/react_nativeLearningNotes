const funcs = {
    imageWithSub:(id,position,src,width,height,text)=>{
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }
    },
    photoAlbum:(id,albumID,position,src,width,height,text,size)=>{
        let index = 0;
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub><br>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }
        funcs.button(
            "prev",
            "prevButton",
            "previous",
            ()=>{
                if (index > 0)
                    index--;
                $("#"+albumID).attr("src",src[index]);
            }
        );
        funcs.button(
            "next",
            "nextButton",
            "next",
            ()=>{
                if (index < size-1)
                    index++;
                $("#"+albumID).attr("src",src[index]);
            }
        );
    },
    button:(id,buttonId,text,onClick)=>{
        $("#"+id).html(
            '<button\
                id="'+buttonId+'"\
            >'+
                text+
            '</button>'
        );
        $("#"+buttonId).click(onClick);
    }
}