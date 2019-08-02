console.log('1');
function run(time) {
    time = time || 1000;
    var start = performance.now()
    while(performance.now() - start < time);
    console.log('done 1');
}
run(1)
var a = {
    "code": 200,
    "data": {
        0 : [{
            "id": 86,
            "level": 1,
            "name": "老介新",
            "parentId": 0,
            "type": 0
        },
        {
            "id": 85,
            "level": 1,
            "name": "自然流量",
            "parentId": 0,
            "type": 0
        },
        {
            "id": 84,
            "level": 1,
            "name": "线上渠道",
            "parentId": 0,
            "type": 0
        }],
        1 : [{
            "id": 91,
            "level": 1,
            "name": "昨日客户",
            "parentId": 0,
            "type": 1
        },
        {
            "id": 90,
            "level": 1,
            "name": "明日客户",
            "parentId": 0,
            "type": 1
        },
        {
            "id": 89,
            "level": 1,
            "name": "今日客户",
            "parentId": 0,
            "type": 1
        },
        {
            "id": 88,
            "level": 1,
            "name": "未处理客户",
            "parentId": 0,
            "type": 1
        },
        {
            "id": 87,
            "level": 1,
            "name": "所有客户",
            "parentId": 0,
            "type": 1
        }],
        2 : [{
            "id": 23,
            "level": 1,
            "name": "已安装",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 13,
            "level": 1,
            "name": "方案修改后取消",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 80,
                "level": 2,
                "name": "客户取消",
                "parentId": 14,
                "type": 2
            },
            {
                "id": 81,
                "level": 2,
                "name": "门店取消",
                "parentId": 14,
                "type": 2
            },
            {
                "id": 82,
                "level": 2,
                "name": "其他原因取消",
                "parentId": 14,
                "type": 2
            },
            {
                "id": 83,
                "level": 2,
                "name": "整装取消",
                "parentId": 14,
                "type": 2
            }],
            "id": 14,
            "level": 1,
            "name": "已交定金",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 15,
            "level": 1,
            "name": "已签预付合同",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 16,
            "level": 1,
            "name": "已签正式合同，交部分款",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 17,
            "level": 1,
            "name": "已签正式合同，交全款",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 18,
            "level": 1,
            "name": "已申请退款",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 19,
            "level": 1,
            "name": "已退款",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 20,
            "level": 1,
            "name": "已下单",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 21,
            "level": 1,
            "name": "已生产",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 22,
            "level": 1,
            "name": "已送货",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 76,
                "level": 2,
                "name": "门店取消",
                "parentId": 12,
                "type": 2
            },
            {
                "id": 77,
                "level": 2,
                "name": "客户延迟看方案",
                "parentId": 12,
                "type": 2
            },
            {
                "id": 75,
                "level": 2,
                "name": "客户取消",
                "parentId": 12,
                "type": 2
            },
            {
                "id": 78,
                "level": 2,
                "name": "其他原因取消",
                "parentId": 12,
                "type": 2
            },
            {
                "id": 79,
                "level": 2,
                "name": "整装取消",
                "parentId": 12,
                "type": 2
            }],
            "id": 12,
            "level": 1,
            "name": "已看方案修改",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 3,
            "level": 1,
            "name": "已分配给门店",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 1,
            "level": 1,
            "name": "新申请",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 26,
                "level": 2,
                "name": "未开始装修",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 25,
                "level": 2,
                "name": "正在装修中",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 24,
                "level": 2,
                "name": "未交房",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 28,
                "level": 2,
                "name": "时间不定",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 29,
                "level": 2,
                "name": "联系不上",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 30,
                "level": 2,
                "name": "不着急买家具",
                "parentId": 2,
                "type": 2
            },
            {
                "id": 27,
                "level": 2,
                "name": "考虑中",
                "parentId": 2,
                "type": 2
            }],
            "id": 2,
            "level": 1,
            "name": "正在跟进中",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 38,
                "level": 2,
                "name": "客户点来看看",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 40,
                "level": 2,
                "name": "已购买其他品牌家具",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 41,
                "level": 2,
                "name": "无法联系上客户",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 42,
                "level": 2,
                "name": "客户不接受工期",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 43,
                "level": 2,
                "name": "客户不接受价格",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 44,
                "level": 2,
                "name": "客户不接受进店",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 45,
                "level": 2,
                "name": "客户想买实木家具",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 46,
                "level": 2,
                "name": "客人要买办公家具",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 47,
                "level": 2,
                "name": "不想买我们的家具",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 39,
                "level": 2,
                "name": "请装修公司做了",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 37,
                "level": 2,
                "name": "客户说没有提交",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 31,
                "level": 2,
                "name": "无效数据",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 32,
                "level": 2,
                "name": "一年后交房",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 33,
                "level": 2,
                "name": "不需要装修",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 34,
                "level": 2,
                "name": "楼盘不可服务",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 35,
                "level": 2,
                "name": "房子不在服务区",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 36,
                "level": 2,
                "name": "当地站点未开通",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 48,
                "level": 2,
                "name": "不需要买家具",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 49,
                "level": 2,
                "name": "客户只想要设计图",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 50,
                "level": 2,
                "name": "客户说不需要跟进",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 51,
                "level": 2,
                "name": "产品无法定制",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 52,
                "level": 2,
                "name": "客户买的东西太少",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 53,
                "level": 2,
                "name": "电话号码不正确",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 54,
                "level": 2,
                "name": "咨询售后问题",
                "parentId": 4,
                "type": 2
            },
            {
                "id": 55,
                "level": 2,
                "name": "重复申请",
                "parentId": 4,
                "type": 2
            }],
            "id": 4,
            "level": 1,
            "name": "无法分配给门店",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 5,
            "level": 1,
            "name": "已确定量尺时间",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 56,
                "level": 2,
                "name": "客户取消",
                "parentId": 6,
                "type": 2
            },
            {
                "id": 60,
                "level": 2,
                "name": "整装取消",
                "parentId": 6,
                "type": 2
            },
            {
                "id": 59,
                "level": 2,
                "name": "门店延迟量尺",
                "parentId": 6,
                "type": 2
            },
            {
                "id": 57,
                "level": 2,
                "name": "门店取消",
                "parentId": 6,
                "type": 2
            },
            {
                "id": 58,
                "level": 2,
                "name": "客户延迟量尺",
                "parentId": 6,
                "type": 2
            }],
            "id": 6,
            "level": 1,
            "name": "未量尺",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 7,
            "level": 1,
            "name": "已量尺",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 61,
                "level": 2,
                "name": "客户取消",
                "parentId": 8,
                "type": 2
            },
            {
                "id": 62,
                "level": 2,
                "name": "门店取消",
                "parentId": 8,
                "type": 2
            },
            {
                "id": 63,
                "level": 2,
                "name": "客户延迟看方案",
                "parentId": 8,
                "type": 2
            },
            {
                "id": 64,
                "level": 2,
                "name": "其他原因取消",
                "parentId": 8,
                "type": 2
            },
            {
                "id": 65,
                "level": 2,
                "name": "整装取消",
                "parentId": 8,
                "type": 2
            }],
            "id": 8,
            "level": 1,
            "name": "未看初次方案",
            "parentId": 0,
            "type": 2
        },
        {
            "id": 9,
            "level": 1,
            "name": "已看初次方案",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 66,
                "level": 2,
                "name": "客户取消",
                "parentId": 10,
                "type": 2
            },
            {
                "id": 67,
                "level": 2,
                "name": "门店取消",
                "parentId": 10,
                "type": 2
            },
            {
                "id": 68,
                "level": 2,
                "name": "其他原因取消",
                "parentId": 10,
                "type": 2
            },
            {
                "id": 69,
                "level": 2,
                "name": "整装取消",
                "parentId": 10,
                "type": 2
            }],
            "id": 10,
            "level": 1,
            "name": "初次方案取消",
            "parentId": 0,
            "type": 2
        },
        {
            "childrens": [{
                "id": 74,
                "level": 2,
                "name": "整装取消",
                "parentId": 11,
                "type": 2
            },
            {
                "id": 73,
                "level": 2,
                "name": "其他原因取消",
                "parentId": 11,
                "type": 2
            },
            {
                "id": 72,
                "level": 2,
                "name": "客户延迟看方案",
                "parentId": 11,
                "type": 2
            },
            {
                "id": 71,
                "level": 2,
                "name": "门店取消",
                "parentId": 11,
                "type": 2
            },
            {
                "id": 70,
                "level": 2,
                "name": "客户取消",
                "parentId": 11,
                "type": 2
            }],
            "id": 11,
            "level": 1,
            "name": "未看方案修改",
            "parentId": 0,
            "type": 2
        }],
        3 : [{
            "id": 103,
            "level": 1,
            "name": "次卧",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 102,
            "level": 1,
            "name": "主卧",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 101,
            "level": 1,
            "name": "客餐厅",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 104,
            "level": 1,
            "name": "儿童房",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 105,
            "level": 1,
            "name": "厨房",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 107,
            "level": 1,
            "name": "卫生间",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 111,
            "level": 1,
            "name": "其他",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 110,
            "level": 1,
            "name": "书房",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 109,
            "level": 1,
            "name": "杂物间",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 108,
            "level": 1,
            "name": "阳台",
            "parentId": 0,
            "type": 3
        },
        {
            "id": 106,
            "level": 1,
            "name": "门厅",
            "parentId": 0,
            "type": 3
        }],
        4 : [{
            "id": 116,
            "level": 1,
            "name": "自建房/出租房",
            "parentId": 0,
            "type": 4
        },
        {
            "id": 115,
            "level": 1,
            "name": "在住房添置",
            "parentId": 0,
            "type": 4
        },
        {
            "id": 114,
            "level": 1,
            "name": "翻新房",
            "parentId": 0,
            "type": 4
        },
        {
            "id": 113,
            "level": 1,
            "name": "毛坯房",
            "parentId": 0,
            "type": 4
        },
        {
            "id": 112,
            "level": 1,
            "name": "精装房",
            "parentId": 0,
            "type": 4
        }],
        5 : [{
            "id": 119,
            "level": 1,
            "name": "装修完成",
            "parentId": 0,
            "type": 5
        },
        {
            "id": 118,
            "level": 1,
            "name": "正在装修",
            "parentId": 0,
            "type": 5
        },
        {
            "id": 117,
            "level": 1,
            "name": "准备装修",
            "parentId": 0,
            "type": 5
        }]
    },
    "msg": ""
}