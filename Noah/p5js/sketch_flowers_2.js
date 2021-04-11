

var width;
var height;

var img;

function setup() {
    // 正常操作的时候 width = windowWidth 和 height = windowHeight
    // 可以把 width 和 height 的值改成不同大小的屏幕测试

    width = windowWidth
    height = windowHeight

    createCanvas(width, height);

    // 图片背景
    img = createImg('https://www.pennington.com/-/media/Images/Pennington2-NA/US/blog/seed/how-to-identify-your-grass/Kentucky_31.jpg?h=800&la=en&w=1000&hash=7AF84F56C78ACAD83BABBF310157577B92EFB857')
    img.hide();
}

function draw() {
    
    // 显示图片
    image(img,0,0,width,height)
    
    Petals: {
        
        // 左上角的花瓣
        fill(243,13,26)
        ellipse(width/4,1*(height/4),width/2,height/2)
    
        // 左边的花瓣
        fill(248,86,30)
        ellipse(width/4,height/2,width/2,height/4)
        
        // 左下角的花瓣
        fill(253,200,46)
        ellipse(width/4,3*(height/4),width/2,height/2)
    
        // 下面的花瓣
        fill(103,205,37)
        ellipse(width/2,3*(height/4),width/4,height/2)

        // 右下角的花瓣
        fill(91,194,226)
        ellipse(3*(width/4),3*(height/4),width/2,height/2)
    
        // 右边的花瓣
        fill(35,68,157)
        ellipse(3*(width/4),height/2,width/2,height/4)

        // 右上角的花瓣
        fill(135,40,158)
        ellipse(3*(width/4),height/4,width/2,height/2)
        
        // 上面的花瓣
        fill(244,88,174)
        ellipse(width/2,height/4,width/4,height/2) 
    }
    
    Stamen: {
        // 花蕊
        fill(253,242,99)
        ellipse(width/2,height/2,width/2,height/2)
        text("🙂",width/2-5,height/2)
    }
}