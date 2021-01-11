/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : pololero

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 11/01/2021 11:18:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for POLO_FILES
-- ----------------------------
DROP TABLE IF EXISTS `POLO_FILES`;
CREATE TABLE `POLO_FILES` (
  `id` int(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `fileUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of POLO_FILES
-- ----------------------------
BEGIN;
INSERT INTO `POLO_FILES` VALUES (1352848, '测试文件', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/helloworld.pdf');
INSERT INTO `POLO_FILES` VALUES (4904348, 'hello', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1598511230269');
INSERT INTO `POLO_FILES` VALUES (5282048, '视频1', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597907130709.mp4');
INSERT INTO `POLO_FILES` VALUES (1798179048, '笑嘻嘻', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1598510883820');
COMMIT;

-- ----------------------------
-- Table structure for polo_msgs
-- ----------------------------
DROP TABLE IF EXISTS `polo_msgs`;
CREATE TABLE `polo_msgs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of polo_msgs
-- ----------------------------
BEGIN;
INSERT INTO `polo_msgs` VALUES (1, '测试', '123@qq.com', '13111111111', '城东街道多了几分垃圾分类色调和佛挡杀佛凉山大火反馈的和开发建设大街放声大哭华发商都会计法烧开后打飞机', '1596422721639');
INSERT INTO `polo_msgs` VALUES (819948, 'xxxx', '515467002@qq.com', '1313131313', 'asdasdad', '1597388035446');
INSERT INTO `polo_msgs` VALUES (2971548, '金', '593141', '18814851618', '111', '1597547390989');
INSERT INTO `polo_msgs` VALUES (9654848, '测试', '515467002@qq.com', '1313131313', '阿斯达打算大多', '1597387977865');
INSERT INTO `polo_msgs` VALUES (44364848, '11', '515467002@qq.com', '1313131313', '1212', '1596863086000');
INSERT INTO `polo_msgs` VALUES (554099948, '笑嘻嘻', '515467002@qq.com', '1313131313', '11212', '1597026903533');
INSERT INTO `polo_msgs` VALUES (2147483647, '1212', '11111111@qq.com', '123', '111111', '1596987071506');
COMMIT;

-- ----------------------------
-- Table structure for polo_news
-- ----------------------------
DROP TABLE IF EXISTS `polo_news`;
CREATE TABLE `polo_news` (
  `id` int(11) NOT NULL,
  `info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `showTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of polo_news
-- ----------------------------
BEGIN;
INSERT INTO `polo_news` VALUES (6015848, '<p class=\"ql-align-justify\">2019年6月6日，“<strong><em>增长的逻辑”-中国国际家居产业发展论坛暨2019年六六泛家装半年度盛典</em></strong>在上海举行。rnpx作为本次活动的特约支持单位，中国区总裁李腾霄先生受邀出席。</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-center\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190827/20190827091806_78746.jpg\" height=\"334\" width=\"500\"></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">本次论坛聚焦装企增长，致力于为与会企业提供更多可实践的增长途径与方法。与会的各位家装行业大咖结合论坛主题，从不同的角度出发分享了各自的观点。例如论坛主席张仁先生认为家装行业要关注政策动向，把握行业发展趋势；泛家装战略研究院院长唐人先生认为家装要素的有效整合可以带给客户更好的体验。深圳市家装家居行业协会会长李晓锋先生提倡，家装不是创新而是守旧，是匠心，是把服务做好。</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190827/20190827092006_35971.jpg\" height=\"333\" width=\"500\"></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">分享的嘉宾中有国内各大家装公司的负责人，大家结合自身企业的发展历程，分享了不同的经验和对行业的看法，在场的参与者都感觉受益匪浅。例如星艺装饰总裁余敏先生认为老牌装企的新增长点在于企业的变革要抓住行业的发展趋势和消费者的需求；南鸿装饰董事长祝旭慷先生认为，新形势下，口碑营销和最强交付能力依然是至关重要的增长点。</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-center\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190827/20190827092328_11179.jpg\" height=\"333\" width=\"500\"></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><strong><em>“信息化、电子商务，物流及配套服务的高速发展，有力的推动了大家居行业的供应链整合；科学及高效的扁平化供应链模式，既是家装行业的主要赢利点也是坚强后盾。”</em></strong>这是rnpx中国区总裁李腾霄先生基于自身品牌与行业发展融合所表述的观点。</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-center\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190827/20190827092251_71914.jpg\" height=\"667\" width=\"500\"></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">作为各大家装公司的合作伙伴，rnpx一直积极的融入行业大环境，期待通过交流和分享，更好的拥抱变化，为行业的变革和前进贡献自己的一份力量。好产品需要通过好的渠道和平台去分享给更多对品质有追求的人，rnpx与大家携手并进，愿大家越来越好！</p>', '聚焦装企增长，rnpx助力中国国际家居产业发展论坛！', '1597152203774', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/112.jpg', '2020-08-28');
INSERT INTO `polo_news` VALUES (83439948, '<p class=\"ql-align-center\">熟悉POLOPLAST的朋友一定知道，随着rnpx在国内的战略合作客户数量不断增加，每年我们都会与合作伙伴们相约，定期前往德国慕尼黑工厂参观考察，目的是为了增进彼此了解，在考察过程中互相学习与成长。2019年6月，我们又一次如约踏上了德意志巴伐利亚的土地，开始了德国制造和德系精工奥秘的探寻之旅。</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323830933jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323838047jpg\"></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">考察团一行受到了POLOPLAST德国工厂首席运营官Mr. Roman的热烈欢迎和盛情招待，rnpx亚太区销售总监&nbsp;Mr. Larry也陪同参观。接待人员与考察团一行首先在会议室进行了座谈。德方技术人员向考察团成员详细介绍了POLOPLAST的品牌、历史以及产品等情况。对于POLOPLAST超过70年的发展历史，以及超过半个世纪的管道技术经验，考察团成员都表现出了充分的兴趣和尊重，大家也就自身想要了解的问题与德方人员进行了相关的探讨和交流。</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323852608jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323860108jpg\"></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">△产品交流会</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">随后在Mr. Roman的带领下，考察团一行开始对POLOPLAST生产车间进行了参观。偌大的生产车间装配有各种挤塑和注塑设备，此外还有水循环系统和冷却系统等。这些都是PPR管道和管件生产的基础设备。在德方人员的讲解中，大家了解了生产的大致流程。除了高度自动化的生产设备，令大家印象深刻的是几台全自动机光检测设备。这几台设备是POLOPLAST花重金引进的，用于管件成品的360度全自动激光检测，以确保成品没有质量瑕疵。正是因为有高度自动化的制造设备以及精益求精的检测系统，才能确保生产出的产品符合“德国制造”的严苛标准，让消费者可以更放心使用。</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323878494jpg\"></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); background-color: rgb(238, 237, 235);\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\"></span><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323891281jpg\"></p><p class=\"ql-align-center\">△自动生产与自动检测设备</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); background-color: rgb(238, 237, 235);\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323905561jpg\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\"></span></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); background-color: rgb(238, 237, 235);\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\"></span><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323915558jpg\"></p><p class=\"ql-align-center\">△生产区成品</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">整个POLOPLAST厂区除了一半的生产区，另外将近一半都是测试和试验区。各种测试和试验的进行，例如冲击试验，打压试验，拉伸试验等，都是为了确保更高的产品品质。这样的试验与生产都是同步进行的，是常态化的，正是因为这样的专注和坚持，才让POLOPLAST历经半个世纪仍历久弥新，受到全球用户的喜爱。德国制造也因这一份严谨与匠心，在全球享有极高的美誉度。</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); background-color: rgb(238, 237, 235);\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\"></span><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323932737jpg\"></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); background-color: rgb(238, 237, 235);\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\"></span><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323942432jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323987624jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597323999152jpg\"></p><p class=\"ql-align-center\">△各种测试及设备</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">在大口径PPR管道的焊接机前，大家了解了整个切割和焊接的过程。这与平时大家所了解的小口径的熔接方式有着很大的不同。</span></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">&nbsp;</span><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597324010513jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597324021205jpg\"></p><p class=\"ql-align-center\">△大口径管子焊接设备</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51);\">在成品堆放区，大家有幸目睹了发往中国的集装箱的装卸过程。在模具区，大家了解到POLOPLAST所有模具都是自行开发的，这得益于品牌自1947年成立之初就是做塑料模具起家的。在原料区，大家了解到POLOPLAST管道的PP粒子原料都来自北欧化工所提供的原配料。</span></p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597324036256jpg\"></p><p class=\"ql-align-center\"><img src=\"http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/1597324043276jpg\"></p><p class=\"ql-align-center\">△发往中国的集装箱装卸</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">本次考察活动让成员对rnpx有了更近一步的了解，对品牌的认知有了进一步的提升。大家纷纷表示，当亲身感受工厂的一切后，都会产生与之前截然不同的感知，受益匪浅。我们希望通过每一次的考察，能够传递给大家共同的价值观，毕竟道相同才能为谋。未来，期待更多同道中人一起同行。</p>', '测试', '1597568173605', '', '2020-08-16');
INSERT INTO `polo_news` VALUES (2147483647, '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">2019年3月11日-3月15日，2019ISH展在法兰克福会展中心拉开序幕，作为行业内知名的国际展会，法兰克福ISH展吸引了全球范围众多知名的暖通、制冷、卫浴、管道品牌参与。rnpxPOLOPLAST作为塑料管道行业的国际知名供应商，再次受邀参与盛会。</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093115_14756.jpg\" height=\"278\" width=\"500\"></span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093130_47511.jpg\" height=\"281\" width=\"500\"></span></p><p><br></p><p>说到rnpx与法兰克福这座城市的渊源，除了展会，其实我们得先从Flughafen Frankfurt（法兰克福机场）说起。因为<span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">早在2008年，POLOPLAST就成了这座巨无霸机场的建筑材料供应商之一，rnpx的管道是法兰克福机场给排水管道系统的组成部分之一。</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093153_70542.jpg\" height=\"333\" width=\"500\"></span></p><p><br></p><p><a href=\"https://baike.baidu.com/item/%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/3491292\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">法兰克福国际机场</a><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">(FRA)，是德国最大的航空枢纽，也是全球最重要的国际机场和航空运输枢纽之一，位列欧洲三大机场之一。如此重要的地标工程，对于建筑材料的安全和品质要求自然是极高的。法兰克福是德国乃至欧洲重要的工商业、金融服务业和交通中心。每年有众多的产品与交易都在此汇集，大大小小的行业展会更是不计其数。因此，当地的工程类项目在选材时具有得天独厚的便利性。某一品牌想要在众多的竞争者中脱颖而出，并不是一件简单的事。</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093220_60184.jpg\" height=\"333\" width=\"500\"></span></p><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">作为一家建筑给排水管道的全方案提供商，POLOPLAST此次在ISH参展的产品涵盖了饮用水供水管道系统，空调管道系统，建筑排水管道系统几大类，包括了Polo-Ecosan 单层PPR管道，Polo-Ecosan ML5 五层PPR-CT管道，Polo-Uv ML5&nbsp;五层PPR-CT防紫外线管道，Polo-Klima空调管道，POLO-KAL 静音管道等产品系列。</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093251_93137.jpg\" height=\"281\" width=\"500\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093318_40092.jpg\" height=\"281\" width=\"500\"></span></p><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);\">专业的展示形象和丰富的产品系列吸引了现场众多参访者参观。我们惊喜的发现POLOPLAST展位上的参访者中有众多的亚洲面孔，更确定的说是中国面孔。他们都是慕名而来，这代表着品牌在中国市场得到了很大的认可，品牌知名度有了极大的提升，我们为此感到开心和骄傲。</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093349_67566.jpg\" height=\"243\" width=\"500\"><img src=\"http://www.poloplast.cn/admin/lib/editor/attached/image/20190315/20190315093412_48451.jpg\" height=\"243\" width=\"500\"></span></p>', 'rnpxPOLOPLAST亮相2019法兰克福ISH展！', '1597151186581', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/2331.jpg', '2020-08-13');
COMMIT;

-- ----------------------------
-- Table structure for polo_pros
-- ----------------------------
DROP TABLE IF EXISTS `polo_pros`;
CREATE TABLE `polo_pros` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '产品名',
  `bannerUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `seriesDesc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '系列',
  `specification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '规格',
  `size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '常规尺寸',
  `material` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '原料',
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '颜色',
  `field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '应用领域',
  `brief` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '产品简介',
  `advantage` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '产品优势与特点',
  `id` int(11) NOT NULL,
  `seriesType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '系列类型',
  `firstUrls` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '产品主图',
  `detailUrls` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '产品详情图',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of polo_pros
-- ----------------------------
BEGIN;
INSERT INTO `polo_pros` VALUES ('POLO-ECOSAN ML5系列五层PPR热水管', 'http://poloplast.oss-cn-hangzhou.aliyuncs.com/poloplast/WechatIMG38377.jpeg', NULL, 'SDR 7.4', '外径20mm-110mm', 'PP-R，PPR-CT复合材料，玻璃纤维复合材料', '绿色', '家庭冷热水输送、暖通、空调等', 'POLO-ECOSAN ML5管道代表了立乐管道在无规共聚聚丙烯管道系统领域全新的技术成果。聚丙烯复合物发展到了管道的实际应用领域—五层纤维复合管道。rnpx五层纤维复合管道系统结合了PP-R CT和玻璃纤维复合材料的优势，增加了PP-R管道在长期高温环境下的应力特性和低温环境下的抗外力强度。\n管道外层采用高品质聚丙烯PP-R80原料，第二层和第四层采用聚丙烯玻璃纤维复合材料，第三层和第五层采用最新研发的PP-R CT原料。', '', 4559348, '1', '', '');
INSERT INTO `polo_pros` VALUES ('POLO-ECOSAN系列单层PPR热水管', '', NULL, 'SDR 6', '外径20mm-110mm', 'PP-R', '绿色', '家庭冷热水输送、暖通、空调等', 'POLO-ECOSAN系列PPR管道专为建筑给水而设计，凭借超过半个世纪的管道技术经验，以及对产品品质的卓越追求，立乐POLO-ECOSAN管道拥有高质量且丰富的产品线，能够为用户提供全方位的，安全、可靠、耐用的给水管道系统解决方案，带给大家更健康舒适的用水体验。', '优异原料—与北欧化工战略合作近30年，使用北欧化工高端原配料。铜配件采用高品质防脱锌耐腐蚀黄铜，不镀镍，不含镍、锰、铝等重金属物质。,高环保性—高品质原料造就产品的高环保性，符合德国直饮水使用标准。,匠心工艺—内壁光滑，不易附着水中杂质，不易形成水垢。,经久耐用—抗压性强，耐高低温性能优异，使用寿命长。,便捷安装—连接方便，效果稳定，热熔不冒黑烟，不产生刺鼻异味。,检验严苛— 管件成品经过360度全自动激光检测，确保产品品质。,原装进口—管子管件上印有“MADE IN GERMANY”标识，保障德国制造。,权威认证—通过多个国际权威行业认证，众多地标性国际工程案例。', 9245448, '1', '', '');
COMMIT;

-- ----------------------------
-- Table structure for POLO_USERS
-- ----------------------------
DROP TABLE IF EXISTS `POLO_USERS`;
CREATE TABLE `POLO_USERS` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of POLO_USERS
-- ----------------------------
BEGIN;
INSERT INTO `POLO_USERS` VALUES (1, 'admin', '123456');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
