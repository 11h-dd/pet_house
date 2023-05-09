import React, {useEffect, useState} from "react";
import "./index.module.css"
import {message} from "antd";

const MapsGd = (props) => {
    const [value, SetValue] = useState("")
    useEffect(() => {
        var maps = new window.AMap.Map("maps", {
            zoom: 8, // pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度
            // viewMode:'3D', // 地图模式
            // terrain: true // 开启地形图
            // mapStyle: 'amap://styles/whitesmoke',
            // viewMode: '2D',
            resizeEnable: true,
            // center: [105.602725, 37.076636],
        })
        // 构造点标记
        // var markerContent = '' + '<div class="custom-content-marker">' + '<img src="//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png">' + '</div>';
        var marker = new window.AMap.Marker({
            icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            offset: new window.AMap.Pixel(-13, -30)
            // content: markerContent,
        });
        window.AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'], function () {
            // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            maps.addControl(new window.AMap.ToolBar({
                position: "lt",
            }));
            // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            maps.addControl(new window.AMap.Scale());
            // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            maps.addControl(new window.AMap.MapType());
            // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
            // maps.addControl(new window.AMap.Geolocation());
        });
        window.AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new window.AMap.Geolocation({
                getCityWhenFail:true,
                enableHighAccuracy: true, // 是否使用高精度定位，默认：true
                timeout: 2000, // 设置定位超时时间，默认：无穷大
                offset: [10, 20],  // 定位按钮的停靠位置的偏移量
                zoomToAccuracy: true,  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                position: 'RB', //  定位按钮的排放位置,  RB表示右下
            })
            // maps.addControl(geolocation)
            geolocation.getCurrentPosition(function (status, result) {
                if (status === 'complete') {
                    onComplete(result)
                } else {
                    onError(result)
                }
            });

            function onComplete(data) {
                // data是具体的定位信息
                marker.setPosition(new window.AMap.LngLat(data.position.lng, data.position.lat))
                maps.setCenter([data.position.lng, data.position.lat])
            }

            function onError(data) {
                // 定位出错
               message.error("定位失败请检查您的网络")
            }
        })
        window.AMap.plugin(['AMap.PlaceSearch','AMap.AutoComplete'], function(){
            var auto = new window.AMap.AutoComplete({
                input:"keyword"
            });
            var placeSearch = new window.AMap.PlaceSearch({
                map: maps
            });  //构造地点查询类
            auto.on("select", select);//注册监听，当选中某条记录时会触发
            // // console.log("进入")
            function select(e) {
                placeSearch.setCity(e.poi.adcode);
                placeSearch.search(e.poi.name);  //关键字查询查询
                marker.setPosition(new window.AMap.LngLat(e.poi.location.lng, e.poi.location.lat))
                maps.setCenter([e.poi.location.lng, e.poi.location.lat])
                maps.setZoom(30)
                console.log(e,"e这里面有返回的信息")
            }
        });
        maps.add([marker]);
    }, [])
    return (
        <>
            <div id={"maps"} style={{height: "400px"}}>
            </div>
            <div id="tip" >
                <input type="text" id="keyword" name="keyword" placeholder="请输入关键字"
                       value={value}
                       onChange={(e) => {
                           SetValue(e.target.value)
                       }}
                />
            </div>

        </>
     )

};

export default MapsGd;