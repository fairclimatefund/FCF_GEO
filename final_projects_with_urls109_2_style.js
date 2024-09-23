var size = 0;
var placement = 'point';

var style_final_projects_with_urls109_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Co2 Reduction");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("any") !== null) {
        labelText = String(feature.get("any"));
    }
    if (value >= 5.000000 && value <= 10.833333) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.833333 && value <= 24.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.4909 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.000000 && value <= 45.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.98182 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 45.000000 && value <= 67.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.47272 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 67.000000 && value <= 91.166667) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.96364 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 91.166667 && value <= 142.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.45454 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 142.000000 && value <= 192.833333) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.94546 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 192.833333 && value <= 207.666667) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.43636 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 207.666667 && value <= 294.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.92728 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 294.500000 && value <= 428.666667) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15.41818 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 428.666667 && value <= 601.666667) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.9091 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 601.666667 && value <= 970.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.944)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(245,245,245,0.944)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
