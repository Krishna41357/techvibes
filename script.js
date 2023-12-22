var tl=gsap.timeline();
tl
    .from('.Lowest',{
        
    onStart:function () {
        $('.Lowest').textillate({ 
            in: 
            { 
                effect: "fadeInUp" ,
                callback:function(){
                    $('.Lowest').textillate('out');
                }
            } ,
            out:{
                effect:'fadeOutUp'
            }
        });
        
    }

    })
    .from('#secondLowest',{
        opacity:0,
        delay:1,
        onStart:function () {
            $('#secondLowest').textillate({ 
                in: 
                { 
                    effect: "fadeInUp" ,
                    callback:function(){
                        $('#secondLowest').textillate('out');
                    }
                } ,
                out:{
                    effect:'fadeOutUp'
                }
            });
            
        }
    
        })
        .from('#secondtop',{
        opacity:0,
        delay:1,
        onStart:function () {
            $('#secondtop').textillate({ 
                in: 
                { 
                    effect: "fadeInUp" ,
                    callback:function(){
                        $('#secondtop').textillate('out');
                    }
                } ,
                out:{
                    effect:'fadeOutUp'
                }
            });
            
        }
        })

        .from('#top',{
        opacity:0,
        delay:1,
        onStart:function () {
            $('#top').textillate({ 
                in: 
                { 
                    effect: "fadeInUp" ,
                    callback:function(){
                        $('#top').textillate('out');
                    }
                } ,
                out:{
                    effect:'fadeOutUp'
                }
            });
            
        }
    
        })
        .to("#topscreen",{
            top:"-100%",
            delay:1,
            duration:1.2,
            ease:"power4.easeOut"
        })
        