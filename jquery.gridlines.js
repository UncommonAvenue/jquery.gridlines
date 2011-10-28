(function($) {
    $.fn.gridlines = function(options) {
        var settings ={
            "x" : 32,
            "y" : 32,
            "color" : "#000"
        }
            
        $.extend({}, settings, options);
        
        gridCanvas = document.createElement("canvas");
        gridCanvas.id = "gridCanvas";
        gridCanvas.width = settings.x;
        gridCanvas.height = settings.y;
        
        var ctx = gridCanvas.getContext("2d");
        ctx.moveTo(settings.x, 0);
        ctx.lineTo(settings.x, settings.y);
        
        ctx.moveTo(0, settings.y);
        ctx.lineTo(settings.x, settings.y);
        
        ctx.strokeStyle = settings.color;
        ctx.stroke();
        
        dataUrl = gridCanvas.toDataURL("image/png");
        
        return this.css("background-image", "url(" + dataUrl +")");
    };

})(jQuery);