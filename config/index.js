export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxf31af18b11272b21",
    // 公众号APP_SECRET
    APP_SECRET: "75c716385a836bd906c668397a833966",
    // 模板消息id
    TEMPLATE_ID: "	kWJU1LN_dy2r2KDXQbjPxQEszruue9MzCIa_wvBl3tE",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["o3QpR5-wwN6ER51H4HnDLwLOX4hY"，"o3QpR5x6vW4WYZ7t1GmegUZMk5nc"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

   // 所在省份
    PROVINCE: "江苏",
    // 所在城市
    CITY: "无锡",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "晕晕", "year": "2002", "date": "11-11"},
      {"name": "小然", "year": "2002", "date": "12-23"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-11-26",
   


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "我爱你"


    }

// {{date.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
