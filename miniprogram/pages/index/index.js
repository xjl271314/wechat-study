"use strict";
var app = getApp();
Page({
    data: {
        viewList: {
            category: '视图容器',
            list: [{
                    label: 'cover-image',
                    desc: '覆盖在原生组件之上的图片视图。',
                    path: '/pages/cover-image/cover-image'
                }, {
                    label: 'cover-view',
                    desc: '覆盖在原生组件之上的文本视图。',
                    path: '/pages/cover-view/index'
                }, {
                    label: 'match-media',
                    desc: 'media query 匹配检测节点。',
                    path: '/pages/match-media/index'
                }]
        },
        mediaList: {
            category: '媒体组件',
            list: [
                {
                    label: 'video',
                    desc: '视频（v2.4.0 起支持同层渲染）。',
                    path: '/pages/video/index'
                },
                {
                    label: 'live-player',
                    desc: '实时音视频播放（v2.9.1 起支持同层渲染）。',
                    path: '/pages/live-player/index'
                }
            ],
        },
    },
    onLoad: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFO1lBQ04sUUFBUSxFQUFFLE1BQU07WUFDaEIsSUFBSSxFQUFFLENBQUM7b0JBQ0gsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSxnQ0FBZ0M7aUJBQ3pDLEVBQUU7b0JBQ0MsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSx5QkFBeUI7aUJBQ2xDLEVBQUU7b0JBQ0MsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLElBQUksRUFBRSwwQkFBMEI7aUJBQ25DLENBQUM7U0FDTDtRQUNELFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLElBQUksRUFBRTtnQkFDRjtvQkFDSSxLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUscUJBQXFCO29CQUMzQixJQUFJLEVBQUUsb0JBQW9CO2lCQUM3QjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsYUFBYTtvQkFDcEIsSUFBSSxFQUFFLDBCQUEwQjtvQkFDaEMsSUFBSSxFQUFFLDBCQUEwQjtpQkFDbkM7YUFBQztTQUNUO0tBQ0o7SUFDRCxNQUFNO0lBRU4sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgdmlld0xpc3Q6IHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAn6KeG5Zu+5a655ZmoJyxcbiAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdjb3Zlci1pbWFnZScsXG4gICAgICAgICAgICAgICAgZGVzYzogJ+imhuebluWcqOWOn+eUn+e7hOS7tuS5i+S4iueahOWbvueJh+inhuWbvuOAgicsXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9jb3Zlci1pbWFnZS9jb3Zlci1pbWFnZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ2NvdmVyLXZpZXcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICfopobnm5blnKjljp/nlJ/nu4Tku7bkuYvkuIrnmoTmlofmnKzop4blm77jgIInLFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY292ZXItdmlldy9pbmRleCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ21hdGNoLW1lZGlhJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnbWVkaWEgcXVlcnkg5Yy56YWN5qOA5rWL6IqC54K544CCJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL21hdGNoLW1lZGlhL2luZGV4J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgbWVkaWFMaXN0OiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ+WqkuS9k+e7hOS7ticsXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ+inhumike+8iHYyLjQuMCDotbfmlK/mjIHlkIzlsYLmuLLmn5PvvInjgIInLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3ZpZGVvL2luZGV4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2xpdmUtcGxheWVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogJ+WunuaXtumfs+inhumikeaSreaUvu+8iHYyLjkuMSDotbfmlK/mjIHlkIzlsYLmuLLmn5PvvInjgIInLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2xpdmUtcGxheWVyL2luZGV4J1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfSxcbn0pXG4iXX0=