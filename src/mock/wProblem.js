const data = [
  {
    key: 1,
    tm: [
      {
        q: '烧菜做饭为什么要加盖？',
        o: [
          {
            id: 'a',
            t: '保持锅内温度，饭菜热得快，同时维生素不易随蒸气流失',
            b: true,
          },
          {
            id: 'b',
            t: '防止汤汁外溅',
            b: false,
          },
          {
            id: 'c',
            t: '加速浓缩汤汁',
            b: false,
          },
          {
            id: 'd',
            t: '害怕热气灼伤',
            b: false,
          },
        ],
      },
      {
        q: '煮排骨汤时加什么可使骨头中的磷、钙溶解于汤中？',
        o: [
          {
            id: 'a',
            t: '酱油',
            b: false,
          },
          {
            id: 'b',
            t: '醋',
            b: true,
          },
          {
            id: 'c',
            t: '糖',
            b: false,
          },
          {
            id: 'd',
            t: '盐',
            b: false,
          },
        ],
      },
      {
        q: '“皮蛋”又称松花蛋，是由哪种蛋加工而成？',
        o: [
          {
            id: 'a',
            t: '鸡蛋',
            b: false,
          },
          {
            id: 'b',
            t: '鸭蛋',
            b: true,
          },
          {
            id: 'c',
            t: '鹅蛋',
            b: false,
          },
          {
            id: 'd',
            t: '鹌鹑蛋',
            b: false,
          },
        ],
      },
      {
        q: '脆皮乳猪是哪个省的特色菜？',
        o: [
          {
            id: 'a',
            t: '广东',
            b: true,
          },
          {
            id: 'b',
            t: '广西',
            b: false,
          },
          {
            id: 'c',
            t: '河南',
            b: false,
          },
          {
            id: 'd',
            t: '河北',
            b: false,
          },
        ],
      },
      {
        q: '成菜不仅鲜香，而且不易变质的食用菌类是？',
        o: [
          {
            id: 'a',
            t: '猴头菌',
            b: false,
          },
          {
            id: 'b',
            t: '口蘑',
            b: false,
          },
          {
            id: 'c',
            t: '竹荪',
            b: true,
          },
          {
            id: 'd',
            t: '河北',
            b: false,
          },
        ],
      },
      {
        q: '用20几种中草药和香料制成，常用来烹饪的是什么调味品？',
        o: [
          {
            id: 'a',
            t: '豆瓣酱',
            b: false,
          },
          {
            id: 'b',
            t: '十三香',
            b: true,
          },
          {
            id: 'c',
            t: '胡椒面',
            b: false,
          },
          {
            id: 'd',
            t: '味精',
            b: false,
          },
        ],
      },
      {
        q: '蒸馒头时,锅盖的周围会流汗,这是什么现象？',
        o: [
          {
            id: 'a',
            t: '液化',
            b: true,
          },
          {
            id: 'b',
            t: '水汽扩散',
            b: false,
          },
          {
            id: 'c',
            t: '汽化',
            b: false,
          },
          {
            id: 'd',
            t: '氧化',
            b: false,
          },
        ],
      },
      {
        q: '以下哪个是大蒜去皮的简单方法？',
        o: [
          {
            id: 'a',
            t: '放入冷藏室',
            b: true,
          },
          {
            id: 'b',
            t: '放罐子里封盖摇晃',
            b: false,
          },
          {
            id: 'c',
            t: '菜刀拍',
            b: false,
          },
          {
            id: 'd',
            t: '用手直接剥',
            b: false,
          },
        ],
      },
      {
        q: '土豆和什么水果放在一起能避免发芽？',
        o: [
          {
            id: 'a',
            t: '香蕉',
            b: false,
          },
          {
            id: 'b',
            t: '桃子',
            b: false,
          },
          {
            id: 'c',
            t: '苹果',
            b: true,
          },
          {
            id: 'd',
            t: '西瓜',
            b: false,
          },
        ],
      },
      {
        q: '最初“糖果”的糖取自什么？',
        o: [
          {
            id: 'a',
            t: '麦芽糖',
            b: false,
          },
          {
            id: 'b',
            t: '甘蔗',
            b: false,
          },
          {
            id: 'c',
            t: '白砂糖',
            b: false,
          },
          {
            id: 'd',
            t: '蜂蜜',
            b: true,
          },
        ],
      },
    ],
  },
  {
    key: 2,
    tm: [
      {
        q: '麻婆豆腐的原名叫什么？',
        o: [
          {
            id: 'a',
            t: '李麻婆豆腐',
            b: false,
          },
          {
            id: 'b',
            t: '张麻婆豆腐',
            b: false,
          },
          {
            id: 'c',
            t: '陈麻婆豆腐',
            b: true,
          },
          {
            id: 'd',
            t: '赵麻婆豆腐',
            b: false,
          },
        ],
      },
      {
        q: '如何判断鸡蛋的新鲜程度？',
        o: [
          {
            id: 'a',
            t: '放入清水中，新鲜的鸡蛋会沉下去，反之则会浮上来',
            b: false,
          },
          {
            id: 'b',
            t: '放入盐水中，新鲜的鸡蛋会沉下去，反之则会浮上来',
            b: true,
          },
          {
            id: 'c',
            t: '放入清水中，新鲜的鸡蛋会浮上来，反之则会沉下去',
            b: false,
          },
          {
            id: 'd',
            t: '放入盐水中，新鲜的鸡蛋会浮上来，反之则会沉下去',
            b: false,
          },
        ],
      },
      {
        q: '炒菜时油里加什么东西能防止油外溅？',
        o: [
          {
            id: 'a',
            t: '醋',
            b: false,
          },
          {
            id: 'b',
            t: '糖',
            b: false,
          },
          {
            id: 'c',
            t: '水',
            b: false,
          },
          {
            id: 'd',
            t: '盐',
            b: true,
          },
        ],
      },
      {
        q: '以麻辣著称的是哪一种菜系？',
        o: [
          {
            id: 'a',
            t: '川菜',
            b: true,
          },
          {
            id: 'b',
            t: '湘菜',
            b: false,
          },
          {
            id: 'c',
            t: '鲁菜',
            b: false,
          },
          {
            id: 'd',
            t: '粤菜',
            b: false,
          },
        ],
      },
      {
        q: '老一辈人都喜欢拿什么拯救糊了的米饭？',
        o: [
          {
            id: 'a',
            t: '大葱',
            b: true,
          },
          {
            id: 'b',
            t: '花椒',
            b: false,
          },
          {
            id: 'c',
            t: '八角',
            b: false,
          },
          {
            id: 'd',
            t: '辣椒',
            b: false,
          },
        ],
      },
      {
        q: '煲汤太咸了怎么办？',
        o: [
          {
            id: 'a',
            t: '锅内加醋冲淡咸味',
            b: false,
          },
          {
            id: 'b',
            t: '锅内加水冲淡盐味',
            b: false,
          },
          {
            id: 'c',
            t: '放入大块西红柿煮几分钟捞出来',
            b: false,
          },
          {
            id: 'd',
            t: '放入大块土豆煮几分钟后捞出来',
            b: true,
          },
        ],
      },
      {
        q: '煮饺子前加什么饺子不会粘在一起？',
        o: [
          {
            id: 'a',
            t: '糖',
            b: false,
          },
          {
            id: 'b',
            t: '盐',
            b: true,
          },
          {
            id: 'c',
            t: '花椒',
            b: false,
          },
          {
            id: 'd',
            t: '香油',
            b: false,
          },
        ],
      },
      {
        q: '鱼汤呈现乳白色是什么决定的？',
        o: [
          {
            id: 'a',
            t: '营养',
            b: false,
          },
          {
            id: 'b',
            t: '脂肪',
            b: true,
          },
          {
            id: 'c',
            t: '调料',
            b: false,
          },
          {
            id: 'd',
            t: '鱼的种类',
            b: false,
          },
        ],
      },
      {
        q: '鸡蛋里蛋黄和蛋清哪个的脂肪含量高?',
        o: [
          {
            id: 'a',
            t: '蛋黄',
            b: true,
          },
          {
            id: 'b',
            t: '蛋清',
            b: false,
          },
          {
            id: 'c',
            t: '一样高',
            b: false,
          },
          {
            id: 'd',
            t: '都不高',
            b: false,
          },
        ],
      },
      {
        q: '被称为“液体面包”的是哪种饮品？',
        o: [
          {
            id: 'a',
            t: '啤酒',
            b: false,
          },
          {
            id: 'b',
            t: '牛奶',
            b: true,
          },
          {
            id: 'c',
            t: '碳酸饮料',
            b: false,
          },
          {
            id: 'd',
            t: '奶茶',
            b: false,
          },
        ],
      },
    ],
  },
  {
    key: 3,
    tm: [
      {
        q: '红烧菜肴为什么放白糖?',
        o: [
          {
            id: 'a',
            t: '缓解咸味',
            b: false,
          },
          {
            id: 'b',
            t: '加甜味',
            b: false,
          },
          {
            id: 'c',
            t: '呈色，提香',
            b: true,
          },
          {
            id: 'd',
            t: '爱好',
            b: false,
          },
        ],
      },
      {
        q: '下列那种物品不宜久存?',
        o: [
          {
            id: 'a',
            t: '生抽',
            b: false,
          },
          {
            id: 'b',
            t: '食用油',
            b: true,
          },
          {
            id: 'c',
            t: '老抽',
            b: false,
          },
          {
            id: 'd',
            t: '料酒',
            b: false,
          },
        ],
      },
      {
        q: '猕猴桃属于什么种类水果?',
        o: [
          {
            id: 'a',
            t: '桃类',
            b: false,
          },
          {
            id: 'b',
            t: '核果类',
            b: false,
          },
          {
            id: 'c',
            t: '柑橘类',
            b: false,
          },
          {
            id: 'd',
            t: '浆果类',
            b: true,
          },
        ],
      },
      {
        q: '用下列锅炒菜，对人体健康更有益的是？',
        o: [
          {
            id: 'a',
            t: '铝锅',
            b: false,
          },
          {
            id: 'b',
            t: '砂锅',
            b: false,
          },
          {
            id: 'c',
            t: '不锈钢锅',
            b: false,
          },
          {
            id: 'd',
            t: '铁锅',
            b: true,
          },
        ],
      },
      {
        q: '饺子是谁发明的？',
        o: [
          {
            id: 'a',
            t: '张仲景',
            b: true,
          },
          {
            id: 'b',
            t: '李时珍',
            b: false,
          },
          {
            id: 'c',
            t: '华佗',
            b: false,
          },
          {
            id: 'd',
            t: '扁鹊',
            b: false,
          },
        ],
      },
      {
        q: '花椒的果实长在哪里的?',
        o: [
          {
            id: 'a',
            t: '树上',
            b: true,
          },
          {
            id: 'b',
            t: '地上',
            b: false,
          },
          {
            id: 'c',
            t: '土里',
            b: false,
          },
          {
            id: 'd',
            t: '水里',
            b: false,
          },
        ],
      },
      {
        q: '酸味感会随着食物的温度升高而?',
        o: [
          {
            id: 'a',
            t: '改变',
            b: false,
          },
          {
            id: 'b',
            t: '不变',
            b: false,
          },
          {
            id: 'c',
            t: '变强',
            b: false,
          },
          {
            id: 'd',
            t: '变弱',
            b: true,
          },
        ],
      },
      {
        q: '诗句“富贵不肯吃，贫者不解煮”描写的是哪道菜？',
        o: [
          {
            id: 'a',
            t: '东坡肉',
            b: true,
          },
          {
            id: 'b',
            t: '臭豆腐',
            b: false,
          },
          {
            id: 'c',
            t: '螺蛳粉',
            b: false,
          },
          {
            id: 'd',
            t: '炸灌肠',
            b: false,
          },
        ],
      },
      {
        q: '“蚂蚁上树”的主要食材是肉末和? ',
        o: [
          {
            id: 'a',
            t: '蚂蚁',
            b: false,
          },
          {
            id: 'b',
            t: '粉丝',
            b: true,
          },
          {
            id: 'c',
            t: '树枝',
            b: false,
          },
          {
            id: 'd',
            t: '面条',
            b: false,
          },
        ],
      },
      {
        q: '螃蟹不能和以下哪种食物一起吃？',
        o: [
          {
            id: 'a',
            t: '冬笋',
            b: false,
          },
          {
            id: 'b',
            t: '木耳',
            b: false,
          },
          {
            id: 'c',
            t: '桃子',
            b: false,
          },
          {
            id: 'd',
            t: '柿子',
            b: true,
          },
        ],
      },
    ],
  },
  {
    key: 3,
    tm: [
      {
        q: '糖醋咕咾肉的肉料烹制前预制需要上什么粉？',
        o: [
          {
            id: 'a',
            t: '米粉',
            b: false,
          },
          {
            id: 'b',
            t: '淀粉',
            b: false,
          },
          {
            id: 'c',
            t: '酥炸粉',
            b: true,
          },
          {
            id: 'd',
            t: '孜然粉',
            b: false,
          },
        ],
      },
      {
        q: '营养素含量丰富，又有滋补作价值，故有“动物人参”美誉的禽鸟是？',
        o: [
          {
            id: 'a',
            t: '燕窝',
            b: false,
          },
          {
            id: 'b',
            t: '鹌鹑',
            b: true,
          },
          {
            id: 'c',
            t: '花胶',
            b: false,
          },
          {
            id: 'd',
            t: '猫头鹰',
            b: false,
          },
        ],
      },
      {
        q: '“馄饨”在广东又叫什么？',
        o: [
          {
            id: 'a',
            t: '云吞',
            b: false,
          },
          {
            id: 'b',
            t: '包子',
            b: true,
          },
          {
            id: 'c',
            t: '饺子',
            b: false,
          },
          {
            id: 'd',
            t: '馒头',
            b: false,
          },
        ],
      },
      {
        q: '以下哪道菜属于八大菜系中的粤菜？',
        o: [
          {
            id: 'a',
            t: '鱼香肉丝',
            b: false,
          },
          {
            id: 'b',
            t: '文思豆腐',
            b: false,
          },
          {
            id: 'c',
            t: '红烧臭鳜鱼',
            b: false,
          },
          {
            id: 'd',
            t: '梅菜扣肉',
            b: true,
          },
        ],
      },
      {
        q: '被后人誉为“烹调之圣”的人是？',
        o: [
          {
            id: 'a',
            t: '伊尹',
            b: true,
          },
          {
            id: 'b',
            t: '庖丁',
            b: false,
          },
          {
            id: 'c',
            t: '苏轼',
            b: false,
          },
          {
            id: 'd',
            t: '安元',
            b: false,
          },
        ],
      },
      {
        q: '煮咖啡的温度应该在多少度之间？',
        o: [
          {
            id: 'a',
            t: '80°―85°',
            b: false,
          },
          {
            id: 'b',
            t: '90°―93°',
            b: true,
          },
          {
            id: 'c',
            t: '70°—75°',
            b: false,
          },
          {
            id: 'd',
            t: '99°—120°',
            b: false,
          },
        ],
      },
      {
        q: '西餐中，白色的菜板是用来切？',
        o: [
          {
            id: 'a',
            t: '蔬菜水果类',
            b: false,
          },
          {
            id: 'b',
            t: '生肉类',
            b: false,
          },
          {
            id: 'c',
            t: '即食食物',
            b: true,
          },
          {
            id: 'd',
            t: '海鲜类',
            b: false,
          },
        ],
      },
      {
        q: '食用发芽的马铃薯会发生食物中毒，是因为发芽的马铃薯含有？',
        o: [
          {
            id: 'a',
            t: '亚硝酸盐',
            b: false,
          },
          {
            id: 'b',
            t: '龙葵素',
            b: true,
          },
          {
            id: 'c',
            t: '沙门菌',
            b: false,
          },
          {
            id: 'd',
            t: '葡萄球菌',
            b: false,
          },
        ],
      },
      {
        q: '地三鲜是哪个省份的特色菜？',
        o: [
          {
            id: 'a',
            t: '山西省',
            b: false,
          },
          {
            id: 'b',
            t: '山东省',
            b: true,
          },
          {
            id: 'c',
            t: '广东省',
            b: false,
          },
          {
            id: 'd',
            t: '广西省',
            b: false,
          },
        ],
      },
      {
        q: '杭州名菜“干炸响铃”，“响铃”是一种？',
        o: [
          {
            id: 'a',
            t: '蛋制品',
            b: false,
          },
          {
            id: 'b',
            t: '乳制品',
            b: false,
          },
          {
            id: 'c',
            t: '豆制品',
            b: true,
          },
          {
            id: 'd',
            t: '面制品',
            b: false,
          },
        ],
      },
    ],
  },
];
export default data;
