// HR助手 数据层（由 index.html 抽取，纯数据，无逻辑）
// 该文件须在 index.html 主脚本之前加载

const RESIGN_PASSWORD = '888888';
const HR_DATA_PASSWORD = 'hr8888'; // 运营数据看板访问密码（与离职密码同风格，内部工具用）

const accountData = {
  title: '开通悦工作（钉钉）账号指引',
  icon: '&#128172;',
  iconClass: 'purple',
  audience: '适用于新入职员工',
  alert: {
    type: 'info',
    text: '入职当天请务必完成悦工作账号开通，该账号密码通用内部所有平台。'
  },
  steps: [
    {
      title: '留意手机短信',
      desc: '一般于入职当日下午3点后才收到短信。',
      tip: '如第二天仍未收到短信，再联系HR。'
    },
    {
      title: '用"忘记密码"方式修改密码',
      desc: '根据手机短信提示——账号即为短信告诉你的账号（一般是你的姓名全拼），用"忘记密码"的方式修改密码。',
      tip: null,
      subSteps: [
        '① 登录OA首页：https://oa.yuexiuproperty.cn/',
        '② 点击【忘记密码】，根据提示修改密码'
      ]
    },
    {
      title: '登录验证',
      desc: '修改成功后，内部所有账号均使用这一个密码。',
      tip: '如果电脑端可以登录但手机端不行，那就晚点（一般是入职当天六点后）再尝试；反之亦然。如有错误请再次登录查看是否有输错密码。'
    },
    {
      title: '下载APP',
      desc: '可扫码下载APP，OA首页会同步更新。',
      tip: null,
      qrcode: true
    }
  ]
};

const promotionData = {
  title: '员工转正操作指引',
  icon: '&#128188;',
  iconClass: 'green',
  audience: '适用于试用期将满的员工',
  alert: {
    type: 'info',
    text: '转正流程需在试用期结束前完成，请提前准备相关材料。如有疑问随时联系HR。'
  },
  stages: [
    {
      title: '入职',
      subtitle: '入职一周内',
      desc: '入职一周内需提交签字版表格给HR。',
      items: ['需提交的表格（由HR提供）'],
      highlight: null,
      notes: [
        '员工本人需了解指标具体内容，如有不清晰需和部门负责人沟通清楚才可签署。',
        '所有空格处需填写完整，如无内容请删去或打斜杠 /。',
        '文件必须线上填写完毕后，再打印出来签字（切勿手填）。'
      ],
      refDoc: { name: '附件2-员工试用期考核目标责任书', file: 'attachments/附件2-员工试用期考核目标责任书.xlsx', icon: '📊' }
    },
    {
      title: '试用期间',
      subtitle: '试用期进行中',
      desc: '完成新员工线上培训计划。',
      items: [
        '完成悦学习——"新伙伴计划（越秀商管）-悦汇城商管"',
        '完成后请找HR进行确认'
      ],
      highlight: null,
      notes: null
    },
    {
      title: '转正面谈',
      subtitle: '试用期间',
      desc: '试用期期间HR会不定期进行线上或线下的沟通及面谈。',
      items: [],
      highlight: null,
      notes: null
    },
    {
      title: '转正前',
      subtitle: '转正日期前半个月',
      desc: '留意OA工作沟通，HR会在转正前半个月时间发出对应通知。',
      items: ['请注意通知提交资料时限，延迟提交会影响工资发放！'],
      highlight: null,
      notes: null
    },
    {
      title: '准备资料',
      subtitle: '转正日期前',
      desc: '按要求准备以下转正材料：',
      items: [
        '重新打印入职时填写的"员工试用期考核目标责任书"，补充评分及评语，对应人员签字',
        '线上填写该资料（不少于2000字），并由负责人进行评分签字',
        '经理转正需要准备答辩PPT（经理级别以下可忽略该条）'
      ],
      highlight: null,
      notes: [
        '无论是最终提交给HR，请员工本人和HR确认是否收到（经常有文件放在领导那儿然后就忘了交上来的情形）。',
        '建议在资料最终签字前，先拍照或扫描发给HR确认内容是否正确（如果部门已经很有经验可省去这一步），以免交上来后被退回重写。'
      ],
      refDocs: [
        { name: '附件1-试用期员工转正申请表', file: 'attachments/附件1-试用期员工转正申请表.doc', icon: '📄' },
        { name: '附件2-员工试用期考核目标责任书', file: 'attachments/附件2-员工试用期考核目标责任书.xlsx', icon: '📊' }
      ]
    },
    {
      title: '提交资料',
      subtitle: '转正日期前完成',
      desc: '需要在要求时间内把两份资料提交给HR。',
      items: [],
      highlight: null,
      notes: null
    },
    {
      title: '转正',
      subtitle: 'HR操作',
      desc: 'HR会负责提交转正流程，员工提交完资料就完成此项工作。',
      items: [],
      highlight: null,
      notes: null
    }
  ]
};

const resignData = {
  title: '员工离职操作指引',
  icon: '&#128197;',
  iconClass: 'amber',
  audience: '适用于需要办理离职的员工',
  topAlert: {
    type: 'warning',
    text: '请务必向HR明确告知最后一天到公司办公的日期（Last Working Day）！此信息关系到离职手续的最终确认，请务必准确告知！！！'
  },
  steps: [
    {
      title: '请与部门负责人沟通',
      desc: '与部门负责人沟通离职原因，确认是否确定要离职。',
      detail: '常规情况下，最后工作日为正式向HR提出申请满一个月（例如：1月1日提出离职，2月1日为最后工作日）。如协商有其他特殊情况，需和负责人沟通确定好后与HR沟通。',
      highlight: null
    },
    {
      title: '正式联系HR',
      desc: '与HR进行离职面谈，确认是否要离职。',
      detail: null,
      highlight: null
    },
    {
      title: '发起离职流程',
      desc: 'OA首页 → 自助服务 → 我要离职。',
      detail: [
        '① 注意选择最后工作日：例如最后工作日为12月1日，离职生效日则选12月2日。不要选择工作时间！',
        '② 提醒直接上级进行审批。',
        '③ 请自行计算发起时间。若离职流程发起过晚，最后工作日可能需要顺延。',
        '',
        '参考示例：',
        '若需覆盖假期：建议至少提前18天发起（保留3天审批流程 + 提前5天通知 + 包含3天假期）',
        '若无影响：建议至少提前10天发起（保留3天审批流程 + 提前5天通知）'
      ],
      highlight: '最后工作日与最后到公司日期为同一天（例如：最后工作日为12月1日，当天仍需回公司正常打卡上班）。最后工作日之后开始休假的，最后到公司日期早于最后工作日（例如：最后工作日为12月5日，但最后到公司的日期为11月25日，之后开始休假）。',
      signFlow: null
    },
    {
      title: '清算假期',
      desc: '发起离职后，系统会自动折算年假等假期。',
      detail: '请查看系统确认剩余假期（根据前述自行折算）。温馨提醒：HR系统内未发起离职前看不到折算假期额度。请与部门负责人沟通剩余假期的休假安排。',
      highlight: null
    },
    {
      title: 'HR通知 & 自行打印附件签字',
      desc: '流程走完后，HR会在工作沟通发出离职通知。请自行打印附件并按要求签字填写。',
      detail: null,
      highlight: null,
      signNote: {
        title: '详细说明',
        items: [
          '① 不可以删除文档里面任何一个字：删掉了就要重签！',
          '② 签字顺序：自己 → 部门领导 → 内勤 → 档案室 → 5楼财务室 → 5楼行政 → 未销 → 朱颖（到这儿之前全部都要签完）→ 最后是离职考勤',
          '③ 考勤凭据需填写离职日期的实际出勤情况。如若11月办理离职手续但最后工作日为12月末，则只需登记12月出勤。请在提交时核对时间区间是否准确，由部门内勤协助填写。'
        ]
      },
      signFlow: ['自己', '部门领导', '内勤', '档案室', '5楼财务室', '5楼行政', '未销', '朱颖'],
      attachmentNote: {
        title: '附件说明',
        items: [
          '附件1或附件2两者中任选其一填写。若无具体交接内容，务必在文件中写明"无任何需要交接的内容"，并由离职人签字确认，工作交接人一栏留空。'
        ]
      }
    },
    {
      title: '获取离职证明',
      desc: '完成以上所有步骤并确认无误后，HR将开具离职证明。',
      detail: [
        '① 离职证明将在最后工作日的第二个工作日开具完成。',
        '② 证明文件会加盖公章并扫描电子版，届时会通过微信发送给您，请主动与HR确认接收。',
        '③ 目前大多数公司均接受此类电子版离职证明（含实体扫描件）。'
      ],
      highlight: null,
      fetchOptions: '领取方式：① 自行回公司领取  ② 到付邮寄（请联系HR安排寄送）'
    }
  ],
  attachments: [
    { name: '附件1-工作交接表', file: 'attachments/附件1-工作交接表.doc', icon: '📄' },
    { name: '附件2-离职员工考勤表（联系内勤员填写）', file: 'attachments/附件2-离职员工考勤表（联系内勤员填写）.docx', icon: '📊' },
    { name: '附件3-离职（调动）手续办理表', file: 'attachments/附件3-离职（调动）手续办理表（请勿删除括号里隐藏文字）.docx', icon: '📄' }
  ]
};

const attendanceData = {
  "title": `考勤宝典`,
  "intro": `无论早上还是下午，无论外勤还是请假，无论你几点到，无论你几点离开——到达公司<span class="att-hl">必须打卡</span>，离开公司<span class="att-hl">必须打卡</span>！`,
  "notice": `当月异常按事假处理，有疑议下月再补，请大家为自己的考勤负责。`,
  "categories": [
    {
      "key": `check`,
      "label": `入门须知`,
      "icon": `📖`,
      "items": [
        {
          "keyword": `如何查看考勤异常`,
          "detail": `三个入口可查看考勤异常：<br><br><b>入口1：</b>悦工作 → 小悦客服 → 单击【查看异常】或【考勤月报】 → 跳转至EHR → 点击【我的考勤】。上方可切换单月或单周的考勤异常，点击【去处理】即可处理。<br><br><b>入口2：</b>悦工作 → 工作台 → 查看更多 → 悦HR → 点击【我的考勤】，其他同上。<br><br><b>入口3：</b>悦工作 → 右上角【打卡】 → 底部【统计】 → 切换到【月】 → 点击处理异常。<br><br><span class="att-warn">⚠ 入口3可能有漏项，建议采用前两种方法。</span>`
        },
        {
          "keyword": `如何确认打卡成功`,
          "detail": `这里没显示的都是不成功的！如果到达打卡范围，按钮一直是灰色，可以通过<b>不断返回再进打卡界面</b>的方式尝试打卡。`
        },
        {
          "keyword": `不处理异常会怎样`,
          "detail": `<span class="att-warn">当月异常按事假处理，有疑议下月再补。</span>请大家为自己的考勤负责，务必当月处理完所有异常。`
        }
      ]
    },
    {
      "key": `late`,
      "label": `迟到`,
      "icon": `⏰`,
      "items": [
        {
          "keyword": `迟到了怎么办`,
          "detail": `先确认是否真的属于迟到：<b>晚于上班时间打卡</b>算迟到（晚到了没打卡≠迟到，属于缺卡）。<br><br><b>分三种情况：</b><br>① <span class="att-hl">≤10分钟 且 本月≤3次</span>：两个条件都满足 → 无需处理，可忽略系统提醒<br>② <span class="att-hl">10分钟~1小时 或 ＞3次</span>：请补卡，<b>必须备注</b>"迟到超过10分钟"或"迟到超过3次"<br>③ <span class="att-warn">＞1小时</span>：联系HR，如无特殊情况依照制度处理`
        },
        {
          "keyword": `迟到补卡超次数`,
          "detail": `年度内第一次发生超次数：下载群内附件<b>情况登记表</b>（表格只需写超出的次数情况），在备注处备注情况，<b>部门负责人签字后交至人力</b>。如不是第一次，依照制度处理。`
        },
        {
          "keyword": `外勤/请假后下午打卡显示迟到`,
          "detail": `行政班系统默认上班时间为 <b>09:00-12:00 13:00-18:00</b>，13点后打卡均视为迟到。<br><br>发生此情况可找HR手动调整（说一次即可，会统一月底调整，<b>不要催促</b>）。<br><br><span class="att-hl">建议外出申请为9-14点。</span>非行政班请找HR沟通。`
        },
        {
          "keyword": `加班迟到怎么办？`,
          "detail": `加班迟到将影响调休假时长，具体可以查看请假栏目。
<br>解决方法：
<br>1.如果加班流程尚未审批完，可以重新发一个流程，比如你是9-18，你9:12才到，就只有7.5小时，此时你可发一个9:30-18:30的加班流程即可解决。
<br>2.如果加班流程已审批完毕，可再次发起申请看能否申请。（暂未试验过）
<br>3.下次申请可以延长时长，比如你可申请9-20，即使迟到了，也不会少于8小时，但如无特殊申请，一天加班最多8小时调休假。
<br>4.本次7.5小时，之后可以再申请工作日加班补满8小时调休。`
        }
      ]
    },
    {
      "key": `miss`,
      "label": `缺卡`,
      "icon": `📋`,
      "items": [
        {
          "keyword": `没打上班卡`,
          "detail": `<b>工作原因忘记：</b>报备HR → 补卡，说明具体理由<br><b>私人原因忘记：</b>报备HR → 年度2次内补卡（下载登记表，备注情况，部门负责人签字）<br><span class="att-warn">超过2次 → 依照制度处理。上班定闹钟！！！</span>`
        },
        {
          "keyword": `没打下班卡`,
          "detail": `直接补卡即可。`
        },
        {
          "keyword": `外勤/请假后忘打卡显示缺卡`,
          "detail": `补卡并备注情况。<span class="att-warn">请记得：无论什么情况，来公司必打卡，离开公司必打卡！</span>`
        },
        {
          "keyword": `不能发起补卡`,
          "detail": `<b>两种情况：</b><br>① <b>超过补卡次数</b>（每月仅3次）→ 处理异常请看"迟到→迟到补卡超次数"<br>② <b>超过补卡时间</b>（最迟次月3日，如10月考勤11月4日0点将无法发起）<br><span class="att-warn">遇到节假日也不会顺延，必须当月处理完所有异常！</span>`
        },
        {
          "keyword": `补卡浪费了能撤销吗`,
          "detail": `后台无法操作。如果还需要补卡机会，请<b>发IT单</b>看看IT是否可以帮你作废。`
        },
        {
          "keyword": `缺卡/迟到可以用假期补吗`,
          "detail": `可以。但上流程需备注清楚是用来补什么的。规则与普通请假一致（例如不能用1小时调休假补）。`
        },
        {
          "keyword": `补卡时自己填时间`,
          "detail": `<span class="att-warn">必须用系统默认时间！</span>例如行政班下班时间=18:00，自行填写18:30会导致补卡失败，浪费次数。且若批完无法撤销。`
        }
      ]
    },
    {
      "key": `field`,
      "label": `外勤`,
      "icon": `🚶`,
      "items": [
        {
          "keyword": `外勤需要打卡/拍照吗`,
          "detail": `不用，审批人共担相关责任。`
        },
        {
          "keyword": `申请了外勤还显示缺卡`,
          "detail": `先确认流程是否<b>办结</b>。若流程为后补会出现BUG，请<b>发IT单</b>处理。`
        },
        {
          "keyword": `申请外勤但临时不外出`,
          "detail": `不用处理，在公司正常打卡即可。`
        },
        {
          "keyword": `去西塔开会不批外勤`,
          "detail": `西塔可以打卡，若有特殊情况需申请外勤可沟通。`
        },
        {
          "keyword": `提前回来打卡显示早退`,
          "detail": `同迟到Q3，联系HR处理即可。<span class="att-hl">建议外出申请为9-14点。</span>`
        },
        {
          "keyword": `外勤能否后补`,
          "detail": `外勤（外出申请）<span class="att-warn">必须提前申请</span>。如事发突然，后补时请补上相关佐证材料。`
        },
        {
          "keyword": `是否可以连续外勤`,
          "detail": `可以。比如你的打卡时间是9-18，那就选例如8月10日9:00 - 8月11日18:00，所有班次同理。`
        }
      ]
    },
    {
      "key": `leave`,
      "label": `请假`,
      "icon": `🏖️`,
      "items": [
        {
          "keyword": `周末加班没调休假到账`,
          "detail": `调休假一般需要<b>2-3天</b>才能结转，可稍等。相关休假流程可以后补（备注原因）。如果等了好几天都没有，着急的同事可<b>发IT单</b>催促IT结转。`
        },
        {
          "keyword": `调休假一周还没到`,
          "detail": `① 确认加班流程是否后补 → 后补则发IT单处理<br>② 不是后补 → 联系HR查看后台<br>③ <span class="att-warn">不可跨两月处理加班！</span>（如6月加的班8月才发现没调休假，无法找回）<br>④ 调休假结转一般一周以内，HR每天都会结转`
        },
        {
          "keyword": `为什么不批调休假`,
          "detail": `休假<b>仅能选择半天（4小时）或一天（8小时）</b>。如果请全天需选择同一假期类型（不能上午3下午4）。<br><br><span class="att-warn">特别提醒行政班同事：请勿将一天假期拆分为不同类别，如上午休调休假、下午休年假。</span>`
        },
        {
          "keyword": `半天调休假能抵扣迟到吗`,
          "detail": `可以。但不能用非半天（如1小时）调休假抵扣未打卡或迟到早退。`
        },
        {
          "keyword": `调休假怎么少了`,
          "detail": `<b>行政班：</b>默认全天加班时间9:00-18:00，可调整为10:00-19:00（每小时区间）。<br>• 跨午休扣1小时（如9:00-15:00实际结算5小时）<br>• 不建议申请12:00-14:00（可能只有1小时）<br>• 排班同事按实际打卡结算<br><br><span class="att-warn">⚠ 行政班同事加班迟到或缺卡都不能补卡，加班当天请务必定好闹钟！</span>`
        },
        {
          "keyword": `调休假期限多久`,
          "detail": `<b>3个月</b>内休完，过期不补。<br><br>如显示有效期1年，为<b>系统显示bug</b>。系统不定期刷新成三个月有效期。<br><span class="att-warn">如系统刷新了后面的调休但没刷新前面的，请及时联系HR，否则可能先扣后来加班的调休假，之前加班的调休假过期作废！</span>`
        },
        {
          "keyword": `怎么不能请假`,
          "detail": `① 系统默认只能请<b>15天以内</b>的假期（含所有假期类型）<br>② 排班制同事<b>下个月未排班</b>不能请假<br>③ 月底需请连续假期（如陪产假十几天）→ 分段请假，私聊HR导入班表后再补第二段流程`
        },
        {
          "keyword": `哪些情况可以后补请假`,
          "detail": `① 当天临时生病 → 后补流程，备注原因<br>② 周末加班调休假未结算周一需调休 → 后补流程，备注原因`
        },
        {
          "keyword": `请XX假需要什么资料/多少天`,
          "detail": `登录<b>网页端OA → 自助服务 → 我要请假 → 我要休假</b>查看。或登录<b>OA → 知识平台 → 搜索《休假管理指引(A0)》</b>查看不同假期详情。`
        },
        {
          "keyword": `请了假不想休/请错日期`,
          "detail": `登录<b>网页端OA → 自助服务 → 我要请假 → 我要销假</b>（请错日期的销假后重新再请）。`
        },
        {
          "keyword": `加班调休假后来发现没到账`,
          "detail": `<span class="att-warn">系统已无法结转！</span>请大家留意加班后调休假是否到账。`
        },
        {
          "keyword": `排班制半天假怎么选`,
          "detail": `<b>【上午】</b>= 你的班表前4小时，<b>【下午】</b>= 你的班表后4小时。<br>例如班次14-22：上午=14-18，下午=18-22。`
        },
        {
          "keyword": `不同假期组合显示旷工`,
          "detail": `发IT单调整。<span class="att-hl">尽量一天内用同一个假期种类。</span>`
        },
        {
          "keyword": `一次性请多天假怎么操作`,
          "detail": `按加号（+）可以一次性请假（如图示）。`
        }
      ]
    },
    {
      "key": `ot`,
      "label": `加班`,
      "icon": `💼`,
      "items": [
        {
          "keyword": `工作日晚能否申请加班`,
          "detail": `可以，需提前申请。行政班结算时间从<b>18:30后</b>开始计算。如申请18:00-21:00 → 按<b>2.5小时</b>结算。`
        },
        {
          "keyword": `工作日加班能否后补`,
          "detail": `<span class="att-warn">不行。</span>如有特殊情况请提前沟通。`
        },
        {
          "keyword": `为什么不批周末加班`,
          "detail": `周末加班仅能选择<b>半天（4小时）或一天（8小时）</b>，实际按打卡时间结算。`
        },
        {
          "keyword": `实际加班超出申请时间`,
          "detail": `按<b>最长申请加班时间</b>结算。请下次预估好时间，预估不准可先<b>按8小时申请</b>。`
        },
        {
          "keyword": `加班时间算错了怎么办`,
          "detail": `系统仅能识别<b>申请内的记录</b>。如申请9:00-18:00实际打卡14:00-22:00 → 按4小时计算。请合理安排加班时间。`
        },
        {
          "keyword": `周末加班横跨饭点怎么算`,
          "detail": `不建议申请11:00-15:00。如申请9:00-18:00打卡11:00-15:00 → 减去行政班设置的1小时 → 按<b>3小时</b>计算。<span class="att-warn">请不要横跨饭点！</span>`
        },
        {
          "keyword": `一线岗位vs行政班加班差异`,
          "detail": `行政班班次时间设计如此，仍有疑问请咨询HR。`
        },
        {
          "keyword": `晚班加班打卡失败`,
          "detail": `显示打卡失败多打几次，还不行需要<b>发IT单</b>处理。`
        }
      ]
    },
    {
      "key": `other`,
      "label": `其他异常`,
      "icon": `⚠️`,
      "items": [
        {
          "keyword": `打卡失败怎么办`,
          "detail": `再打一次！<b>钉钉显示以下截图才算成功</b>（请确认班次是否正确，两个班次临近可能错乱）。`
        },
        {
          "keyword": `第二天才发现打卡失败`,
          "detail": `补卡。`
        },
        {
          "keyword": `怎么发IT单 / IT单写什么`,
          "detail": `<b>有电脑：</b>OA首页 → IT服务台 → <span class="att-warn">一键报障入口（不要选别的！）</span><br><b>没电脑：</b>悦工作 → 工作台 → IT服务台 → 故障申报<br><br><b>写什么：</b>描述清楚发生什么情况，需要IT帮你解决什么问题。不用担心写不清楚，IT不懂会悦工作联系你。如果IT一直没找你，看是哪个IT接单了自己钉钉找他。<br><br><span class="att-hl">新版更新后可选择以上两个保障，鼠标放在图标上可看到相关指引。</span>`
        },
        {
          "keyword": `排班制超下班2小时打卡失败`,
          "detail": `排班制同事部分班次要求下班<b>2小时内</b>打卡。超过2小时打不了卡，请联系HR处理。`
        }
      ]
    }
  ]
};
const attendanceSearchAliases = {
  "异常": [
    `如何查看考勤异常`,
    `不处理异常会怎样`,
    `如何确认打卡成功`
  ],
  "考勤异常": [
    `如何查看考勤异常`,
    `不处理异常会怎样`
  ],
  "查看异常": [
    `如何查看考勤异常`
  ],
  "怎么知道异常": [
    `如何查看考勤异常`
  ],
  "迟到": [
    `迟到了怎么办`,
    `迟到补卡超次数`,
    `外勤/请假后下午打卡显示迟到`,
    `加班迟到怎么办？`
  ],
  "晚到": [
    `迟到了怎么办`
  ],
  "来晚了": [
    `迟到了怎么办`
  ],
  "上班晚": [
    `迟到了怎么办`
  ],
  "迟到怎么办": [
    `迟到了怎么办`
  ],
  "迟到10分钟": [
    `迟到了怎么办`
  ],
  "迟到1小时": [
    `迟到了怎么办`
  ],
  "迟到超过": [
    `迟到了怎么办`,
    `迟到补卡超次数`
  ],
  "超次数": [
    `迟到补卡超次数`,
    `不能发起补卡`
  ],
  "补卡次数": [
    `迟到补卡超次数`,
    `不能发起补卡`
  ],
  "补卡用完": [
    `迟到补卡超次数`,
    `不能发起补卡`
  ],
  "没补卡次数": [
    `迟到补卡超次数`,
    `不能发起补卡`
  ],
  "下午迟到": [
    `外勤/请假后下午打卡显示迟到`
  ],
  "外勤迟到": [
    `外勤/请假后下午打卡显示迟到`
  ],
  "请假迟到": [
    `外勤/请假后下午打卡显示迟到`
  ],
  "缺卡": [
    `没打上班卡`,
    `没打下班卡`,
    `外勤/请假后忘打卡显示缺卡`
  ],
  "忘打卡": [
    `没打上班卡`,
    `没打下班卡`,
    `外勤/请假后忘打卡显示缺卡`
  ],
  "忘记打卡": [
    `没打上班卡`,
    `没打下班卡`,
    `外勤/请假后忘打卡显示缺卡`
  ],
  "没打卡": [
    `没打上班卡`,
    `没打下班卡`,
    `外勤/请假后忘打卡显示缺卡`
  ],
  "上班卡": [
    `没打上班卡`,
    `补卡时自己填时间`
  ],
  "下班卡": [
    `没打下班卡`,
    `补卡时自己填时间`
  ],
  "补卡": [
    `不能发起补卡`,
    `补卡浪费了能撤销吗`,
    `补卡时自己填时间`,
    `缺卡/迟到可以用假期补吗`,
    `迟到补卡超次数`
  ],
  "不能补卡": [
    `不能发起补卡`
  ],
  "无法补卡": [
    `不能发起补卡`
  ],
  "补卡失败": [
    `不能发起补卡`,
    `补卡时自己填时间`
  ],
  "补卡时间": [
    `不能发起补卡`,
    `补卡时自己填时间`
  ],
  "补卡时限": [
    `不能发起补卡`
  ],
  "次月3日": [
    `不能发起补卡`
  ],
  "补卡撤销": [
    `补卡浪费了能撤销吗`
  ],
  "撤销补卡": [
    `补卡浪费了能撤销吗`
  ],
  "补卡浪费": [
    `补卡浪费了能撤销吗`
  ],
  "假期补": [
    `缺卡/迟到可以用假期补吗`
  ],
  "调休补": [
    `缺卡/迟到可以用假期补吗`
  ],
  "抵扣": [
    `半天调休假能抵扣迟到吗`,
    `缺卡/迟到可以用假期补吗`
  ],
  "外勤": [
    `外勤需要打卡/拍照吗`,
    `申请了外勤还显示缺卡`,
    `申请外勤但临时不外出`,
    `外勤能否后补`,
    `提前回来打卡显示早退`,
    `是否可以连续外勤`
  ],
  "外勤拍照": [
    `外勤需要打卡/拍照吗`
  ],
  "外勤打卡": [
    `外勤需要打卡/拍照吗`,
    `申请了外勤还显示缺卡`
  ],
  "外勤后补": [
    `外勤能否后补`
  ],
  "补外勤": [
    `外勤能否后补`
  ],
  "外勤缺卡": [
    `申请了外勤还显示缺卡`,
    `外勤/请假后忘打卡显示缺卡`
  ],
  "不外出": [
    `申请外勤但临时不外出`
  ],
  "西塔": [
    `去西塔开会不批外勤`
  ],
  "早退": [
    `提前回来打卡显示早退`
  ],
  "提前回来": [
    `提前回来打卡显示早退`
  ],
  "调休": [
    `周末加班没调休假到账`,
    `调休假一周还没到`,
    `为什么不批调休假`,
    `半天调休假能抵扣迟到吗`,
    `调休假怎么少了`,
    `调休假期限多久`,
    `加班调休假后来发现没到账`
  ],
  "调休假": [
    `为什么不批调休假`,
    `周末加班没调休假到账`,
    `调休假一周还没到`,
    `半天调休假能抵扣迟到吗`,
    `调休假怎么少了`,
    `调休假期限多久`,
    `加班调休假后来发现没到账`
  ],
  "调休没到": [
    `周末加班没调休假到账`,
    `调休假一周还没到`,
    `加班调休假后来发现没到账`
  ],
  "调休不批": [
    `为什么不批调休假`
  ],
  "调休抵扣": [
    `半天调休假能抵扣迟到吗`
  ],
  "调休少": [
    `调休假怎么少了`
  ],
  "调休期限": [
    `调休假期限多久`
  ],
  "调休过期": [
    `调休假期限多久`,
    `加班调休假后来发现没到账`
  ],
  "请假": [
    `怎么不能请假`,
    `哪些情况可以后补请假`,
    `请XX假需要什么资料/多少天`,
    `请了假不想休/请错日期`,
    `不同假期组合显示旷工`
  ],
  "不能请假": [
    `怎么不能请假`
  ],
  "请假失败": [
    `怎么不能请假`
  ],
  "后补请假": [
    `哪些情况可以后补请假`
  ],
  "请假资料": [
    `请XX假需要什么资料/多少天`
  ],
  "请假多少天": [
    `请XX假需要什么资料/多少天`
  ],
  "销假": [
    `请了假不想休/请错日期`
  ],
  "请错假": [
    `请了假不想休/请错日期`
  ],
  "旷工": [
    `不同假期组合显示旷工`
  ],
  "假期组合": [
    `不同假期组合显示旷工`
  ],
  "多天假": [
    `一次性请多天假怎么操作`
  ],
  "连续请假": [
    `一次性请多天假怎么操作`
  ],
  "排班": [
    `排班制半天假怎么选`,
    `排班制超下班2小时打卡失败`
  ],
  "加班": [
    `工作日晚能否申请加班`,
    `工作日加班能否后补`,
    `为什么不批周末加班`,
    `实际加班超出申请时间`,
    `加班时间算错了怎么办`,
    `周末加班横跨饭点怎么算`
  ],
  "工作日加班": [
    `工作日晚能否申请加班`,
    `工作日加班能否后补`
  ],
  "周末加班": [
    `为什么不批周末加班`,
    `周末加班横跨饭点怎么算`
  ],
  "加班后补": [
    `工作日加班能否后补`
  ],
  "加班超时": [
    `实际加班超出申请时间`
  ],
  "加班算错": [
    `加班时间算错了怎么办`
  ],
  "加班饭点": [
    `周末加班横跨饭点怎么算`
  ],
  "IT单": [
    `怎么发IT单 / IT单写什么`
  ],
  "发IT单": [
    `怎么发IT单 / IT单写什么`
  ],
  "报障": [
    `怎么发IT单 / IT单写什么`
  ],
  "故障申报": [
    `怎么发IT单 / IT单写什么`
  ],
  "IT服务台": [
    `怎么发IT单 / IT单写什么`
  ],
  "报修": [
    `怎么发IT单 / IT单写什么`
  ],
  "IT报障": [
    `怎么发IT单 / IT单写什么`
  ],
  "打卡失败": [
    `打卡失败怎么办`,
    `如何确认打卡成功`,
    `晚班加班打卡失败`
  ],
  "打不了卡": [
    `打卡失败怎么办`,
    `排班制超下班2小时打卡失败`
  ],
  "打卡不成功": [
    `打卡失败怎么办`,
    `如何确认打卡成功`
  ],
  "怎么算": [
    `如何查看考勤异常`,
    `不处理异常会怎样`,
    `调休假怎么少了`
  ],
  "怎么办": [
    `迟到了怎么办`,
    `打卡失败怎么办`,
    `加班时间算错了怎么办`
  ]
};
const attendanceDocRaw = [
  {
    "type": `text`,
    "content": `考勤宝典（持续更新中）`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `到达公司必须打卡，离开公司必须打卡`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `（无论早上还是下午，无论外勤还是请假，无论你几点到，无论你几点离开）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如何知道自己是否有考勤异常？`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `入口1：悦工作——小悦客服——单击【查看异常】或【考勤月报】——跳转至EHR——点击【我的考勤】`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `上方可以切换单月或单周的考勤异常，点击【去处理】即可处理相应流程（需判断是否需要处理，判断不出来请往下看！）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_00.png`
  },
  {
    "type": `image`,
    "src": `attendance_img/att_01.jpg`
  },
  {
    "type": `image`,
    "src": `attendance_img/att_02.png`
  },
  {
    "type": `text`,
    "content": `入口2：悦工作——工作台——查看更多——悦HR——点击【我的考勤】，其他同上`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `入口3：悦工作——右上角【打卡】——底部【统计】——切换到【月】——点击处理异常（该入口可能有漏项，建议采用前两种方法）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如何确认打卡是否成功，这里没显示的都是不成功的！（如果到达打卡范围，按钮一直是灰色，可以通过不断返回再进打卡界面的方式尝试打卡）：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_03.jpg`
  },
  {
    "type": `text`,
    "content": `我当月可以不处理自己的考勤异常吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `【当月异常按事假处理，有疑议下月再补，请大家为自己的考勤负责】`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `一、迟到`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `迟到定义：晚于上班时间打卡（晚到了没打卡不属于迟到！！请转至缺卡查看）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_04.jpg`
  },
  {
    "type": `text`,
    "content": `Q1：我迟到了怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `先判断是否是迟到，向上看迟到定义`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `迟到打卡时间≤10分钟，且本月迟到次数≤3次，如果两个条件都满足，则不用做任何处理或报备（系统可能会一直提醒你迟到，如果是这种情况可以忽略）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `10分钟＜迟到打卡时间≤1小时或迟到次数＞3次，请补卡，并必须备注迟到超过3次或迟到超过10分钟`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `迟到打卡时间＞1小时，请联系HR，如无特殊情况，依照制度处理`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q2：我的迟到情况是需要补卡的，但是没有补卡次数了怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：如果是年度内第一次发生超次数的情况，可以下载群内附件情况登记表（表格只需写超出的次数情况），在备注处备注情况，部门负责人签字后交至人力。如不是，依照制度处理。`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：我早上请了外勤/请了假，下午回来打卡显示迟到怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `若是行政班，系统已默认【09:00-12:00 13:00-18:00】为上班时间，因此13点后的打卡都会视为迟到，如发生此情况可找HR手动调整【说一次即可，会统一月底调整，不要催促，谢谢】。建议外出申请为9-14点。`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `若非行政班，请找HR沟通情况`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：加班迟到怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `加班迟到将影响调休假时长，具体可以查看请假栏目。
<br>解决方法：
<br>1.如果加班流程尚未审批完，可以重新发一个流程，比如你是9-18，你9:12才到，就只有7.5小时，此时你可发一个9:30-18:30的加班流程即可解决。
<br>2.如果加班流程已审批完毕，可再次发起申请看能否申请。（暂未试验过）
<br>3.下次申请可以延长时长，比如你可申请9-20，即使迟到了，也不会少于8小时，但如无特殊申请，一天加班最多8小时调休假。
<br>4.本次7.5小时，之后可以再申请工作日加班补满8小时调休。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `二、缺卡`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `缺卡定义：未打上班卡或下班卡`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `补卡时限：每月3日后不能再补上月异常（例如七月的考勤异常，最晚只能在8.3日前处理，8.4将不能发起补卡）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q1：我没打上班卡怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `因工作原因忘记打上班卡，报备HR，并进行补卡，补卡请说明具体理由`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `因私人原因忘记打上班卡，报备HR，年度2次内可进行补卡，下载群内附件情况登记表，在备注处备注情况，部门负责人签字；超过2次，依照制度处理。【上班定闹钟！！！！】`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q2：我没打下班卡怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：补卡`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：我请了半天外勤/半天假，回来忘记打卡显示缺卡怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：补卡并备注情况，请记得无论什么情况，来公司必打卡，离开公司必打卡`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：我怎么不能发起补卡了？那我怎么处理我的考勤异常呢？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `超过补卡次数，每月补卡只有3次，处理异常请看【迟到-Q2】`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `超过补卡时间，每月补卡最迟是次月3日（例如10月的考勤，11月4日0点将无法发起），处理异常请看【迟到-Q2】`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `【遇到节假日也不会顺延（系统设置就是如此），所以请当月处理完所有考勤异常】`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q5：我看错缺卡时间，补卡浪费了一次怎么办，能不能帮我撤销？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A5：后台无法操作，如果还需要补卡机会请发IT单，看看IT是否可以帮你作废`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q6：我的缺卡和迟到可以用假期补吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A6：可以，但是上流程需要备注清楚是用来补什么的，并且规则和普通请假规则一样（例如不能只用一个小时的调休假补）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q7：补卡出现此提示`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A7：重发流程/关掉重发一次/重启电脑再发一次`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_05.png`
  },
  {
    "type": `text`,
    "content": `Q8：我补卡的时候自己填写时间可以吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A8：需要用系统默认时间，比如行政班的下班时间就是18:00，如果自行填写18:30，会出现补卡失败的情况，浪费一次次数，且若批完无法撤销该流程。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `三、外勤`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `Q1：外勤是否需要打卡/拍照证明？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：不用，审批人共担相关责任`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q2：我申请了外勤，怎么还是显示我缺卡呢？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `请确认流程是否办结`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `流程若为后补，会出现BUG，请发IT单处理`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：我申请了外勤，但是临时不外出需要处理吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：不用，在公司正常打卡即可`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：为什么我去西塔开会，不批我外勤？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：西塔可以打卡，若有特殊情况需申请外勤可以沟通`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q5：我申请了早上外勤，12点之前提前回来了打卡，显示我早退怎么办？（行政班）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A5：同【迟到-Q3】，联系HR处理即可。建议外出申请为9-14点。`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q6：是否可以后补外勤？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A6：外勤（外出申请）必须提前申请，如果因为事发突然，请后补流程的时候补上相关佐证材料。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q7：是否可以连续外勤？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A7：可以。比如你的打卡时间是9-18，那就选例如8月10日9:00 - 8月11日18:00，所有班次同理。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `四、请假`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `Q1：我周末加班了，怎么没有调休假？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：调休假一般需要2-3天内才能结转，如果出现此情况可以稍等，相关休假流程可以后补（后补流程需备注原因）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如果发现等了好几天都没有，着急的同事可以发IT单催促IT结转。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q2：我调休假怎么等了一周还没有？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `请确认加班流程是否后补？若加班流程为后补，请发IT单说明情况处理`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如果加班流程不是后补的，请联系HR看看后台是否已经调休假，如果没有的话尽快发起IT单处理。（不可跨两月处理加班，例如6月加的班，8月才发现调休假里没有需要找回）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `调休假结转一般需要一周以内的时间，如果着急的可以发IT单。比如你周六周日加的班，不能保证周一周二后台就有的，HR每天都会结转，如果发现没有可以联系HR确认今天是否结转，如果已经结转了但是你没有又着急要假请假，请发IT单。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：为什么不批我的调休假？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：休假仅能选择半天或者一天休息，也就是4小时或8小时`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `在假期余额充足的情况下，如果请全天，需选择同一假期类型，例如一次性申请一整天年假或8小时调休假（如果要申请一天调休假，不能申请上午3下午4，分开的是可以的）。（特别提醒行政班同事，在假期充足的情况下，请勿将一天假期拆分为不同类别，例如上午休调休假、下午休年假。）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：我能否用【半天】调休假抵扣迟到？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：可以；不能用非半天（例如1小时）调休假抵扣未打卡或者迟到早退`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q5：我的调休假怎么少了时间？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A5：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `行政班（含上班班次和行政班时间一致人群）默认全天加班时间是9:00-18:00，如果有考虑要晚来晚走的请在申请加班的时候把时间调整为10:00-19:00（每一小时区间），否则加班系统没法读取8小时（例如九点半到，将少半小时；如果申请了10-19，实际打卡11-19，将只有7小时）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `行政班加班和平常上班一样，横跨了午休，将会扣除1小时，例如打卡时间是9:00-15:00，实际结算5小时；`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如申请早上加班9:00-13:00，实际结算4小时；不建议申请12:00-14:00的加班时间，系统可能只有1小时。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `其他排班同事按实际打卡时间结算，如申请了8:00-16:00，实际打卡时间为：8:00-15:15，将按7小时折算`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `因钉钉系统限制问题，【行政班】同事加班迟到或缺卡都不能补卡，加班当天请务必定好闹钟，切勿迟到打卡或忘打卡！`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q6：调休假期限多久？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A6：3个月，如果发现【调休假】显示有效期1年，为系统显示bug，系统将会不定期刷新成三个月有效期；请大家仍在【3个月】内休完，过期不补，如有特殊情况（因工作安排无法休假）请提前联系`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `（如果大家发现系统刷新了后面的调休，没刷新前面的，一定要记得及时联系HR，否则可能出现先扣后来加班的调休假的情形，等刷新后之前加班的调休假可能就过期了！）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q7：我怎么不能请假？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A7：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `系统默认只能请15天以内的假期（含所有假期类型），如部门内部有要求需要提前多久请假，请线下联系，到时候上流程即可。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `如果是排班制的同事，下个月未排班是不能请假的。如遇到月底需要请连续假期，例如陪产假连续十几天，请分段请假（私聊我具体情况，导入班表后我会提醒你把第二段假期流程补上）；其他非紧急情况，请月末导入班表后再请假。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q8：什么情况可以后补请假流程（含当日发当日流程）？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A8：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `当天临时生病，没办法发流程，后补流程请备注原因`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `周末加班调休假未结算，周一就需要调休，后补流程请备注原因`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q9：我请XX假需要什么资料？请XX假有多少天`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A9：请登录网页端OA——自助服务——我要请假——我要休假（仍不清楚请咨询HR）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_06.png`
  },
  {
    "type": `text`,
    "content": `请登录网页端OA——知识平台——搜索制度《广州市悦汇城商业经营管理有限公司员工休假管理指引(A0)》查看不同情况可以休多少天假`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q10：我请了假不想休不能休/请错日期咋办`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A10：请登录网页端OA——自助服务——我要请假——我要销假（请错日期的销假后重新再请）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q11：我几个月前加了班，现在才想起来看调休假，结果发现后天没有，才发现原来是当时打卡失败，该调休假还能补吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A11：系统已无法结转，请大家留意加班后调休假是否到账`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q12：如果我是排班制，但是我要请半天年假，只能选择上午或者下午，我要怎么选择？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A12：【上午】代表你的班表前4小时，【下午】代表你的班表后4小时；例如你的班次为【14-22】，上午为【14-18】，下午为【18-22】`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q13：我早上请的调休假，下午请的年假，系统显示我有半天旷工，怎么处理？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A13：发IT单调整，尽量一天内用同一个假期种类哦`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q14：我想21号休一天，23至27号休5天怎么一次性请假？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A14：如图，按加号可以一次性请假`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_07.png`
  },
  {
    "type": `text`,
    "content": `五、加班`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `每个自然月加班不得超过36小时，请各部门酌情安排`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q1：工作日晚上能否申请加班？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：可以，需要提前申请，行政班结算时间按18:30后开始计算，如申请加班时间为18:00-21:00，按2.5小时结算`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q2：行政班可以后补工作日加班申请吗？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：不行，如有特殊情况请提前沟通`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：为什么不批我周末加班？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：周末加班仅能选择半天或者一天，也就是4小时或8小时，实际加班时间根据打卡时间结算`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：我实际加班时间超出我申请加班时间怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：按最长申请加班时间结算，请下次预估好时间，预估不准可先按8小时申请`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q5：我申请了9-18，实际加班是14-22，加班时长怎么算？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A5：系统仅能识别申请内的记录，即为4小时，请合理安排加班时间`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q6：我是行政班，周末加班可以申请13-17吗？我如果申请11-15或我申请加班是9-18，打卡时间是11-15，加班算几个小时？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A6：可以；不建议按11-15申请；打卡时间将减去行政班次设置的1小时，按3小时计算（因此请大家不要横跨饭点）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q7：为什么一线岗位加班是按照实际8小时计算，行政班却要减去中午1小时？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A7：行政班班次时间设计如此，仍有疑问请咨询HR`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q8：我是上晚班的，早上有事需要加班，临近下班时间没法打下班卡怎么办（打卡失败）？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A8：显示打卡失败多打几次，还不行需要发IT单处理`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `六、其他异常`,
    "bold": true,
    "heading": true
  },
  {
    "type": `text`,
    "content": `Q1：打卡失败怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A1：再打一次，钉钉显示以下截图才算成功！（请确认班次是否正确，如果两个班次临近可能错乱）`,
    "bold": true,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_08.png`
  },
  {
    "type": `text`,
    "content": `Q2：我第二天才发现打卡失败怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A2：补卡`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q3：如果需要IT处理（例如系统BUG），怎么发IT单？IT单要写什么呢？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A3：`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `方法1：如果你有电脑，OA首页——IT服务台——一键报障入口（不要选别的！如果你发现自己的IT单居然要项目总审批，那说明你发错流程了！）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `方法2：如果你没有电脑，悦工作——工作台——IT服务台——故障申报`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `写什么：描述清楚发生什么情况，需要IT帮你解决什么问题（不用担心自己写不清楚，IT不懂他会悦工作联系你的，大胆提吧！如果IT一直没有找你，可以看是哪个IT接单了，你自己钉钉找他）`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `attendance_img/att_09.png`
  },
  {
    "type": `text`,
    "content": `新版更新后可选择以上两个保障，鼠标放在图标上可看到相关指引`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `Q4：我是排班制，超过下班时间2小时才打卡，显示打卡失败怎么办？`,
    "bold": true,
    "heading": false
  },
  {
    "type": `text`,
    "content": `A4：排班制的同事因为班次涉及较多以及系统限制，部分班次还是要求下班2小时内打卡，如有特殊情况超过2小时打不了卡，请联系HR处理`,
    "bold": true,
    "heading": false
  }
];
const itData = {
  "title": `IT 办公指引`,
  "intro": `办公电脑配置、打印机连接、WiFi 网络及 IT 报修等常用操作指引。`,
  "categories": [
    {
      "key": `computer`,
      "label": `电脑配置`,
      "icon": `💻`,
      "items": [
        {
          "keyword": `新员工入职领用`,
          "detail": `入职当天由业务部门统一发放办公电脑-台式机，请妥善使用，离职时原样归还。`
        }
      ]
    },
    {
      "key": `printer`,
      "label": `打印机连接`,
      "icon": `🖨️`,
      "items": [
        {
          "keyword": `添加部门打印机`,
          "detail": `打开「设置 → 蓝牙和其他设备 → 打印机和扫描仪 → 添加设备」，选择对应打印机型号自动安装驱动。如搜索不到，联系 IT 协助配置 IP 地址。`
        },
        {
          "keyword": `常见打印问题`,
          "detail": `打印不出纸？检查纸张是否放好、是否卡纸。<br>打印模糊？更换硒鼓/墨盒。<br>连接不上打印机？重启打印机和电脑，仍不行联系 IT。`
        }
      ]
    },
    {
      "key": `wifi`,
      "label": `WiFi / 网络`,
      "icon": `📶`,
      "items": [
        {
          "keyword": `办公 WiFi`,
          "detail": `<b>SSID：</b>YH168<br><b>密码：</b><span class="pwd-copy" data-copy="yh20200926" data-label="YH168 密码">••••••••  [点击复制]</span><br><br><b>SSID：</b>商业管理<br><b>密码：</b><span class="pwd-copy" data-copy="yh200926" data-label="商业管理 密码">••••••••  [点击复制]</span>`
        },
        {
          "keyword": `网络故障自助排查`,
          "detail": `上不了网？先检查：<br>① 网线是否松动 → 重新插拔<br>② WiFi 是否误连其他网络 → 切回 YH168 或商业管理<br>③ 重启电脑和路由器<br>④ 仍无法解决 → IT 报修`
        }
      ]
    }
  ]
};
const itDocRaw = [
  { type: "text", content: "一、电脑配置", bold: false, heading: true },
  { type: "text", content: "入职当天由业务部门统一发放办公电脑-台式机，请妥善使用，离职时原样归还。", bold: false, heading: false },
  { type: "text", content: "二、打印机连接", bold: false, heading: true },
  { type: "text", content: "添加部门打印机：打开「设置 → 蓝牙和其他设备 → 打印机和扫描仪 → 添加设备」，选择对应打印机型号自动安装驱动。如搜索不到，联系 IT 协助配置 IP 地址。", bold: false, heading: false },
  { type: "text", content: "常见打印问题：打印不出纸？检查纸张是否放好、是否卡纸。打印模糊？更换硒鼓/墨盒。连接不上打印机？重启打印机和电脑，仍不行联系 IT。", bold: false, heading: false },
  { type: "text", content: "三、WiFi / 网络", bold: false, heading: true },
  { type: "text", content: "办公 WiFi — SSID：YH168，密码：", bold: false, heading: false },
  { type: "copy", label: "YH168 密码", value: "yh20200926" },
  { type: "text", content: "SSID：商业管理，密码：", bold: false, heading: false },
  { type: "copy", label: "商业管理 密码", value: "yh200926" },
  { type: "text", content: "网络故障排查：① 网线是否松动 ② WiFi 是否误连其他网络 ③ 重启电脑和路由器 ④ 仍无法解决则 IT 报修。", bold: false, heading: false }
];

const insuranceData = {
  "title": `商业保险 · 员工补充医疗保障`,
  "intro": `公司统一为全体员工购买补充医疗保险，依托「平安企业宝」APP 自助理赔，就医后拍照上传即可，最快当天到账。`,
  "enrollBanner": {
    "title": `📝 补充医疗保险 · 参保办理说明`,
    "points": [
      {
        "tag": `① 员工本人参保`,
        "text": `公司统一为全体员工投保。如您本人需参保，请将<b>本人身份证号</b>提供给 HR 登记即可。`
      },
      {
        "tag": `② 为家属参保`,
        "text": `每位员工可为 <b>1 位</b> 直系亲属（父亲 / 母亲 / 子女）投保。需向 HR 提供家属的 <b>姓名、与本人关系、身份证号</b>；若子女 <b>未满 2 周岁</b>，还需提供 <b>出生医学证明</b>。`
      }
    ],
    "footer": `🗓️ 办理时间：每月 <b>月底</b> 统一办理投保，请提前将资料交给 HR。<br><br>💡 备注：根据上级单位要求，自2024年12月起，公司为员工缴纳的补充商业保险均需由公司代缴代扣个人所得税。`
  },
  "categories": [
    {
      "key": `enroll`,
      "label": `参保办理`,
      "icon": `📝`,
      "items": [
        {
          "keyword": `员工本人参保`,
          "detail": `公司统一为全体员工购买补充医疗保险。如您本人需要参保，只需将<b>本人身份证号</b>提供给 HR 登记即可，无需其他材料。`
        },
        {
          "keyword": `为家属参保（父母 / 子女）`,
          "detail": `每位员工可为 <b>1 位</b> 直系亲属（父亲 / 母亲 / 子女）投保：<br>· 需向 HR 提供家属 <b>姓名、与本人关系、身份证号</b><br>· 子女 <b>未满 2 周岁</b> 的，还需提供 <b>出生医学证明</b><br>· 每月 <b>月底</b> 统一办理投保，请提前将资料交 HR`
        }
      ]
    },
    {
      "key": `about`,
      "label": `关于保障`,
      "icon": `🛡️`,
      "items": [
        {
          "keyword": `什么是补充医疗保险`,
          "detail": `补充医疗保险是公司在<b>社保基本医疗保险</b>之外，为全体员工额外购买的医疗保障。就医产生的合规医疗费用，在社保报销后剩余部分可再按约定进行补充报销，进一步减轻员工医疗负担。`
        },
        {
          "keyword": `保障范围与亮点`,
          "detail": `覆盖 <b>医疗、意外、购药、重疾</b> 四大类保障。依托「平安企业宝」APP 自助理赔：<br>· 手机拍照上传发票 / 病历，<b>AI 智能审核</b><br>· 赔款 <b>最快当天、平均 1-2 天</b> 到账<br>· <b>500 元以下</b> 案件免寄发票原件，全程线上办理`
        }
      ]
    },
    {
      "key": `download`,
      "label": `下载 APP`,
      "icon": `📱`,
      "items": [
        {
          "keyword": `扫码下载平安企业宝`,
          "detail": `使用手机扫描下方二维码下载「平安企业宝」APP，首次登录请使用<b>公司统一企业码</b>完成注册 / 绑定。`,
          "image": `insurance_img/ins_qrcode.png`,
          "imageCaption": `平安企业宝 下载二维码`
        },
        {
          "keyword": `APP 首页功能一览`,
          "detail": `登录后首页可办理：<b>查保单、办理赔、查健康、领权益、保单日历、体检预约、月牙积分、好券</b>，以及「精选 / 视频 / 保险 / 商品」等板块。理赔相关操作请进入「办理赔」。`,
          "image": `insurance_img/ins_app_home.jpg`,
          "imageCaption": `平安企业宝 首页功能示意`
        },
        {
          "keyword": `如何进入办理赔`,
          "detail": `打开 APP 后，点击首页的 <b>「办理赔」</b> 按钮，即可发起理赔申请，按提示拍照上传材料并提交。`
        }
      ]
    },
    {
      "key": `claim`,
      "label": `理赔操作`,
      "icon": `⚡`,
      "items": [
        {
          "keyword": `自助理赔三步走`,
          "detail": `<b>① 拍照上传</b>：用手机拍摄发票、病历等材料并上传<br><b>② 系统自核</b>：AI 智能审核案件信息<br><b>③ 赔款到账</b>：审核通过后赔款打入账户，<b>平均 1-2 天到账</b>`
        },
        {
          "keyword": `线上理赔规则`,
          "detail": `· <b>500 元以下</b> 全案金额：免收发票原件，纯线上办理<br>· <b>超过 500 元或涉及住院</b>：需提交发票 / 结算单原件<br>· 正常免收材料，但有 <b>约 10% 概率抽检</b>（APP 会提示）<br>· 抽检资料请在 <b>赔款到账后再自行处理发票</b><br>· <span class="att-warn">身故、残疾、重大疾病等大险必须线下办理</span>`
        },
        {
          "keyword": `理赔小贴士`,
          "detail": `· 可设置<b>单笔小额免实收单据</b><br>· <b>电子票据</b>可直接上传 PDF 文件<br>· 全部为电子发票的案件<b>免收发票原件</b><br>· 数据由平安自有 APP 承载，安全有保障`
        }
      ]
    },
    {
      "key": `material`,
      "label": `理赔材料`,
      "icon": `📋`,
      "items": [
        {
          "keyword": `医疗 · 门诊`,
          "detail": `① 门（急）诊病历（需主动向医生要求打印）<br>② 医疗费用原始凭证（带公章发票原件或电子票据 PDF）<br>③ 医疗费用明细清单（可选，含项目名称及金额）<br>④ 被保险人身份证明（可选，正反面）`,
          "image": `insurance_img/ins_medical_outpatient.jpg`,
          "imageCaption": `医疗-门诊 材料清单`
        },
        {
          "keyword": `医疗 · 住院`,
          "detail": `① 被保险人身份证明（正反面）<br>② 住院病历 / 出院小结（含入院情况、治疗经过、既往史、出入院诊断）<br>③ 医疗费用原始凭证<br>④ 医疗费用明细清单 / 处方<br>⑤ 社保结算单原件（如使用医保）<br>⑥ 其他（视情况）`,
          "image": `insurance_img/ins_medical_inpatient.jpg`,
          "imageCaption": `医疗-住院 材料清单`
        },
        {
          "keyword": `意外 · 门诊`,
          "detail": `① 被保险人身份证明<br>② 门（急）诊病历<br>③ 医疗费用原始凭证<br>④ 事故证明（可选，由公安 / 交管部门开具）`,
          "image": `insurance_img/ins_accident_outpatient.jpg`,
          "imageCaption": `意外-门诊 材料清单`
        },
        {
          "keyword": `重大疾病`,
          "detail": `① 被保险人身份证明<br>② 病理 / 血液 / 影像检查报告（附疾病诊断证明书）<br>③ 门（急）诊病历（可选）<br>④ 住院病历 / 出院小结（可选）`,
          "image": `insurance_img/ins_critical.jpg`,
          "imageCaption": `重疾 材料清单`
        },
        {
          "keyword": `购药`,
          "detail": `① 医疗费用原始凭证（由药房出具，带公章发票或电子票据 PDF）`,
          "image": `insurance_img/ins_medicine.jpg`,
          "imageCaption": `购药 材料清单`
        }
      ]
    }
  ]
};
const insuranceDocRaw = [
  {
    "type": `heading`,
    "content": `悦汇城 2026 年员工补充医疗保障指引`
  },
  {
    "type": `text`,
    "content": `公司统一为全体员工购买补充医疗保险，依托「平安企业宝」APP 自助理赔，就医后拍照上传即可，最快当天到账。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `一、参保办理说明`,
    "bold": false,
    "heading": true
  },
  {
    "type": `text`,
    "content": `① 员工本人参保：请将本人身份证号提供给 HR 登记即可。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `② 为家属参保：每位员工可为 1 位直系亲属（父亲 / 母亲 / 子女）投保，需向 HR 提供家属姓名、与本人关系、身份证号；子女未满 2 周岁的，还需提供出生医学证明。每月月底统一办理投保。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `二、关于保障`,
    "bold": false,
    "heading": true
  },
  {
    "type": `text`,
    "content": `补充医疗保险是公司在社保基本医疗保险之外为员工额外购买的医疗保障，覆盖医疗、意外、购药、重疾四大类，依托平安企业宝 APP 自助理赔，赔款最快当天、平均 1-2 天到账，500 元以下案件免寄发票原件。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `三、下载 APP`,
    "bold": false,
    "heading": true
  },
  {
    "type": `text`,
    "content": `使用手机扫描二维码下载「平安企业宝」APP，首次登录请直接使用手机号登录，无需绑定公司企业码。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_qrcode.png`,
    "caption": `平安企业宝 下载二维码`
  },
  {
    "type": `text`,
    "content": `APP 首页可办理：查保单、办理赔、查健康、领权益、保单日历、体检预约、月牙积分、好券，以及精选 / 视频 / 保险 / 商品等板块。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_app_home.jpg`,
    "caption": `平安企业宝 首页功能示意`
  },
  {
    "type": `text`,
    "content": `四、理赔操作`,
    "bold": false,
    "heading": true
  },
  {
    "type": `text`,
    "content": `自助理赔三步走：① 拍照上传（手机拍摄发票 / 病历上传）→ ② 系统自核（AI 智能审核）→ ③ 赔款到账（平均 1-2 天到账）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `线上理赔规则：500 元以下全案金额免收发票原件、纯线上办理；超过 500 元或涉及住院需提交发票 / 结算单原件；正常免收材料但有约 10% 概率抽检（APP 会提示）；抽检资料请在赔款到账后再自行处理发票；身故、残疾、重大疾病等大险必须线下办理。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `理赔小贴士：可设置单笔小额免实收单据；电子票据可直接上传 PDF 文件；全部为电子发票的案件免收发票原件；数据由平安自有 APP 承载，安全有保障。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `text`,
    "content": `五、理赔材料`,
    "bold": false,
    "heading": true
  },
  {
    "type": `text`,
    "content": `医疗 · 门诊：① 门（急）诊病历（需主动向医生要求打印）② 医疗费用原始凭证（带公章发票原件或电子票据 PDF）③ 医疗费用明细清单（可选）④ 被保险人身份证明（可选）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_medical_outpatient.jpg`,
    "caption": `医疗-门诊 材料清单`
  },
  {
    "type": `text`,
    "content": `医疗 · 住院：① 被保险人身份证明（正反面）② 住院病历 / 出院小结 ③ 医疗费用原始凭证 ④ 医疗费用明细清单 / 处方 ⑤ 社保结算单原件（如使用医保）⑥ 其他（视情况）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_medical_inpatient.jpg`,
    "caption": `医疗-住院 材料清单`
  },
  {
    "type": `text`,
    "content": `意外 · 门诊：① 被保险人身份证明 ② 门（急）诊病历 ③ 医疗费用原始凭证 ④ 事故证明（可选）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_accident_outpatient.jpg`,
    "caption": `意外-门诊 材料清单`
  },
  {
    "type": `text`,
    "content": `重大疾病：① 被保险人身份证明 ② 病理 / 血液 / 影像检查报告（附疾病诊断证明书）③ 门（急）诊病历（可选）④ 住院病历 / 出院小结（可选）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_critical.jpg`,
    "caption": `重疾 材料清单`
  },
  {
    "type": `text`,
    "content": `购药：① 医疗费用原始凭证（由药房出具，带公章发票或电子票据 PDF）。`,
    "bold": false,
    "heading": false
  },
  {
    "type": `image`,
    "src": `insurance_img/ins_medicine.jpg`,
    "caption": `购药 材料清单`
  }
];
const leaveData = {
  "title": `休假管理指南`,
  "intro": `根据公司休假管理细则，规范各类假期的申请条件、天数标准及审批流程。请仔细阅读各类假期规定，<span class="att-hl">休假前务必提前走OA/悦工作审批流程</span>。`,
  "notice": `未经审批擅自休假的，按照旷工处理。各类假期证明材料请按规定及时提交。`,
  "categories": [
    {
      "key": `annual`,
      "label": `年假`,
      "icon": `🏖️`,
      "items": [
        {
          "keyword": `年假天数标准`,
          "detail": `员工连续工作满12个月以上即可享受年休假。年假天数根据<b>累计工作时间</b>确定：<br><br>累计工作满1年不满10年 → <b>5天</b><br>累计工作满10年不满20年 → <b>10天</b><br>累计工作满20年及以上 → <b>15天</b><br><br><span class="att-hl">累计工作时间</span>包括在不同用人单位的工作期间，依据档案记载、社保缴费记录、劳动合同等有效证明认定。`
        },
        {
          "keyword": `年假时间与跨年规则`,
          "detail": `年假时间为<b>每年1月1日至次年3月31日</b>（年假不得推迟）。<br><br>婚假、产假、计生假、陪产假、丧假等假期<b>不影响当年年假的享受</b>。`
        },
        {
          "keyword": `新入职员工年假怎么算`,
          "detail": `新入职且符合累计工作时间规定的已转正员工，当年度年假天数按实际入职天数折算：<br><br><b class="att-hl">实际年假天数 = （当年度在公司实际天数 ÷ 365天）× 全年应享受年假天数</b><br><br>折算后不足一整天的部分不享受年假。累计工作时间需提交证明材料（档案、社保记录、合同等），由综合管理部审核。`
        },
        {
          "keyword": `离职/退休员工年假怎么算`,
          "detail": `<b>离职员工：</b>当年度年假天数按在公司实际天数折算，不足一整天不享受。已享受超过应休年假天数的，<span class="att-warn">按事假处理</span>。<br><br><b>退休员工：</b>同理按实际天数折算，不足一整天不享受。`
        }
      ]
    },
    {
      "key": `sick`,
      "label": `病假`,
      "icon": `🏥`,
      "items": [
        {
          "keyword": `病假申请流程`,
          "detail": `原则上需<b>提前至少3个工作日</b>在OA（含悦工作）提交请假申请，征得批准后方可休病假。<br><br><b>所需材料：</b>医院出具的当日病历、病假建议书等有效证明资料。<br><br><span class="att-warn">连续病假超过10天，须另外提供诊断证明、化验单、医疗费用发票等。</span>`
        },
        {
          "keyword": `急诊病假怎么请`,
          "detail": `因急诊不能提前提交申请的，必须<b>先口头（电话）向审批人请示</b>，获准后于<b>次日下班前</b>通过OA（含悦工作）提交病假申请流程，并提供有效证明。<br><br><span class="att-warn">逾期未补流程的，按旷工处理。</span>`
        },
        {
          "keyword": `医疗期多久`,
          "detail": `需要停止工作进行医疗时，根据实际工作年限和在本单位工作年限，给予<b>3个月到36个月</b>的医疗期：<br><br><b>实际工作年限10年以下：</b><br>· 本单位5年以下 → 3个月<br>· 本单位5年以上 → 6个月<br><br><b>实际工作年限10年以上：</b><br>· 本单位5年以下 → 6个月<br>· 5-10年 → 9个月<br>· 10-15年 → 12个月<br>· 15-20年 → 18个月<br>· 20-30年 → 24个月<br>· 30年以上 → 36个月<br><br>医疗期从病休第一天开始累计计算。`
        },
        {
          "keyword": `病假工资怎么算`,
          "detail": `休病假3天以内的，病假待遇参照医疗期支付。连续停工超过3天（含3天），按以下标准发放医疗津贴（不低于当地最低工资标准的80%）：<br><br>· 连续工龄不满5年 → 按固定工资<b>45%</b><br>· 满5年不满10年 → <b>50%</b><br>· 满10年不满20年 → <b>55%</b><br>· 满20年及以上 → <b>60%</b><br>· 获劳动模范称号 → <b>65%</b><br><br>低于最低工资标准80%则补足；超过本人正常月均工资80%则按80%发给。`
        }
      ]
    },
    {
      "key": `personal`,
      "label": `事假`,
      "icon": `📝`,
      "items": [
        {
          "keyword": `事假申请流程`,
          "detail": `原则上须<b>提前3个工作日</b>在OA（含悦工作）完成请假申请流程，获得批准后方可休假。<br><br>假期期满后仍不能按时上班的，<span class="att-warn">必须提前办理续假手续。</span>`
        },
        {
          "keyword": `事假扣多少工资`,
          "detail": `事假当日工资停止计发：<br><br><b class="att-hl">扣款金额 = 请假天数 × 月固定工资 / 21.75</b><br><br>事假天数将作为绩效考核的一项评价指标，<span class="att-warn">直接影响绩效奖金的发放。</span>`
        }
      ]
    },
    {
      "key": `marriage`,
      "label": `婚假`,
      "icon": `💒`,
      "items": [
        {
          "keyword": `婚假几天`,
          "detail": `按法定年龄结婚的，可享受<b>婚假3天</b>。再婚可享受法定婚假（3天）。`
        },
        {
          "keyword": `婚假使用期限`,
          "detail": `婚假原则上在<b>结婚登记后一年内一次性使用</b>。逾期未休的视作放弃，公司不作任何补偿。<br><br>确因工作需要不能安排休婚假的，<b>经公司另行审批可延期休假</b>。<br><br>假期内遇公休假日及法定节假日的，<span class="att-warn">均不另加假期天数</span>。`
        },
        {
          "keyword": `婚假申请材料`,
          "detail": `由本人提出<b>书面申请</b>，并出具<b>法定结婚证明</b>，经审批后方能休假。`
        }
      ]
    },
    {
      "key": `maternity`,
      "label": `生育类假期`,
      "icon": `👶`,
      "items": [
        {
          "keyword": `产假多少天`,
          "detail": `符合法律法规规定生育子女的女员工：<br><br><b>产假98天 + 奖励假80天 = 共178天</b><br><br><b>额外增加：</b><br>· 难产（剖腹产、会阴Ⅲ度破裂）→ +30天<br>· 吸引产、钳产、臀位牵引产 → +15天<br>· 多胞胎每多1个婴儿 → +15天<br><br>产假原则上一次性连续安排，遇公休假日及法定节假日<b>不另加天数</b>。`
        },
        {
          "keyword": `陪产假`,
          "detail": `男员工可凭出生证、计划生育服务证等有效证件享受<b>15天陪产假</b>。<br><br>如需提前申请，须在休假后<b>三个月内</b>提交相关证明材料，<span class="att-warn">逾期不办理手续的，已休假假期按事假处理。</span>`
        },
        {
          "keyword": `产检假`,
          "detail": `用于妊娠确认、产前检查及健康培训等：<br><br>· 怀孕<b>第1-7个月</b> → 每月1天<br>· 怀孕<b>第8个月以上</b> → 每月2天`
        },
        {
          "keyword": `哺乳假`,
          "detail": `婴儿未满一周岁且已上班的女员工，给予<b>每班1小时哺乳时间</b>（视作出勤时间）。多胞胎每多哺乳1个婴儿增加1小时。<br><br>由所在部门负责人审批，部门负责人的时间安排需经公司分管领导审批。`
        },
        {
          "keyword": `流产假`,
          "detail": `符合计划生育政策的员工，根据医院证明享受：<br><br>· 怀孕2个月以下 → <b>15天</b><br>· 2-4个月以下 → <b>30天</b><br>· 4个月以上（含4月）→ <b>45天</b><br>· 满7个月以上死胎/早产不成活 → <b>75天</b>`
        },
        {
          "keyword": `计划生育手术假`,
          "detail": `凭医院手术证明申请，依法享受：<br><br>· 取出宫内节育器 → <b>2天</b><br>· 放置宫内节育器 → <b>3天</b><br>· 输卵管结扎 → <b>30天</b><br>· 输精管结扎 → <b>10天</b><br>· 输卵管/输精管复通 → <b>14天</b><br>· 同时两种手术 → 合计计算`
        }
      ]
    },
    {
      "key": `bereavement`,
      "label": `丧假与独生子女护理假`,
      "icon": `🕯️`,
      "items": [
        {
          "keyword": `丧假天数标准`,
          "detail": `· 父母、配偶、子女死亡 → <b>3天</b><br>· 亲兄弟姐妹、配偶的父母死亡 → <b>2天</b><br>· 祖父母、外祖父母死亡 → <b>1天</b><br><br>应在亲属死亡时间<b>一个月内连续使用</b>，遇公休假日及法定节假日不另加天数。<br><br>申请时须提供<b>死亡证明、关系证明</b>等有效证明。`
        },
        {
          "keyword": `独生子女护理假（2021年新规）`,
          "detail": `<b>适用条件：</b>父母双方或一方为广东省户籍，且年满60周岁以上的独生子女。<br><br><b>天数标准：</b><br>· 父母年满60周岁，生子女（无论是否患病）→ 每年<b>5天</b>护理假<br>· 父母患病住院治疗的 → 每年累计不超过<b>15天</b>（含前述5天）<br>· 父母双方均满60岁 → 每年仍只享受5天（<span class="att-warn">不叠加</span>）<br><br><b>使用方式：</b>可拆分请休，原则上不超过<b>2次</b>。<br><br><b>工资待遇：</b>护理假期间工资照发，不影响福利待遇和全勤评奖。<br><br><span class="att-detail-link" onclick="showCareLeaveImage()">📋 查看政策原文</span>`
        }
      ]
    },
    {
      "key": `approval`,
      "label": `休假流程与审批`,
      "icon": `📋`,
      "items": [
        {
          "keyword": `如何提交休假申请`,
          "detail": `所有假期申请均通过<b>OA（含悦工作）</b>提交。<br><br>登录OA或悦工作 → 找到请假/休假申请入口 → 选择假期类型 → 填写起止时间及原因 → 提交审批。<br><br><span class="att-hl">各类假期的证明材料请按要求上传或线下提交至综合管理部。</span>`
        },
        {
          "keyword": `请假材料清单`,
          "detail": `<b>病假：</b>病历、病假建议书（超10天加诊断证明、化验单、费用发票）<br><b>婚假：</b>书面申请、结婚证明<br><b>产假：</b>医学诊断报告、出生证<br><b>陪产假：</b>出生证、计划生育服务证<br><b>丧假：</b>死亡证明、关系证明<br><b>独生子女护理假：</b>住院证明、父母身份证复印件、独生子女证明<br><b>计生手术假：</b>医院手术证明<br><b>年假：</b>累计工作时间证明材料（档案、社保记录、合同等）`
        },
        {
          "keyword": `未审批擅自休假怎么办`,
          "detail": `<span class="att-warn">发生未经审批擅自休假的情况，按照旷工进行处理。</span><br><br>切记：无论什么假期，必须先走审批流程再休假！`
        }
      ]
    }
  ]
};
const SITE_VERSION = '2026.07.28';

const CHANGELOG = [
  { date: '2026-07-28', tag: '新模块', title: '商业保险模块上线', desc: '替换原「我要开证明」，含参保办理说明 + 5 大分类（保障介绍 / 下载 APP / 理赔操作 / 理赔材料）共 14 张知识卡片 + 原始文档视图，接入搜索与小助手意图' },
  { date: '2026-07-20', tag: '功能优化', title: '补卡向导升级', desc: '说"上班卡/下班卡"直接给完整步骤，不再追问上/下班；只有通用"忘打卡"才区分' },
  { date: '2026-07-15', tag: '新功能', title: '更新日志 + 智能办理入口正式上线', desc: '更新日志弹窗系统上线，首页常置入口可随时回看历史迭代；搜索请假直达悦工作申请系统' },
  { date: '2026-07-10', tag: '新功能', title: '请假办理入口', desc: '搜索请假相关问题，答案底部直达悦工作请假申请系统' },
  { date: '2026-07-10', tag: '新功能', title: '更新日志弹窗', desc: '进入页面自动提示近期更新，首页常驻入口可随时回看' },
  { date: '2026-07-10', tag: '优化',   title: '答案可查看原文', desc: '每条答案底部新增入口，一键跳转到对应模块详情页' },
  { date: '2026-07-10', tag: '新功能', title: '小助手智能联想', desc: '输入关键词即推荐考勤宝典/休假细则相关问题，点击直接看答案' },
  { date: '2026-06-30', tag: '优化',   title: '缺卡流程修正', desc: '忘记打上班卡改为先报备HR再补卡，流程更清晰' },
  { date: '2026-06-24', tag: '新功能', title: 'WiFi密码一键复制', desc: '办公WiFi密码点击按钮即复制，不再明文展示' },
  { date: '2026-06-18', tag: '新功能', title: '小助手 v2 智能升级', desc: '智能语义理解 + 多轮问答向导（迟到/缺卡/丧假/年假等场景）' },
  { date: '2026-06-17', tag: '新功能', title: 'IT办公指引模块上线', desc: '电脑配置、打印机、WiFi网络、IT报修等办公指引' },
  { date: '2026-06-17', tag: '新功能', title: '请假指南模块上线', desc: '接入《员工休假管理细则》29条知识，覆盖年假/病假/事假/婚假/生育类/丧假等' },
];

const ACTION_LINKS = {
  leave: { label: '去悦工作提交请假申请', url: 'http://hrma.yuexiuproperty.cn/m/#/self/leave/index' },
};

const ACTION_MODULE_DETECT = {
  leave:      ['请假', '年假', '病假', '事假', '婚假', '产假', '丧假', '生育', '休假', '调休', '带薪', '请假条'],
  attendance: ['打卡', '迟到', '补卡', '缺卡', '忘打', '忘记打', '忘记打卡', '外勤', '考勤', '漏打'],
  it_guide:   ['电脑', 'wifi', '网络', '打印机', '报修', 'it办公', '连不上'],
  insurance:['保险', '商业保险', '补充医疗', '医保', '理赔', '报销', '企业宝', '平安', '参保', '投保'],
  resign:     ['离职', '辞职', '提离职'],
};

const leaveDocRaw = [];
const QR_CODE_SRC = "data:image/png;base64,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";

const faqData = [
  {
    "category": `账号相关`,
    "items": [
      {
        "q": `入职当天没收到悦工作开通短信怎么办？`,
        "a": `短信一般于入职当日下午3点后才会收到。如第二天仍未收到，请联系HR处理。`
      },
      {
        "q": `忘记悦工作登录密码怎么办？`,
        "a": `登录OA首页 https://oa.yuexiuproperty.cn/ ，点击【忘记密码】根据提示通过手机短信验证码重置密码。`
      },
      {
        "q": `悦工作APP无法下载或安装失败？`,
        "a": `请确保手机网络畅通且有足够存储空间。可在OA首页下载APP。如仍有问题，联系HR获取安装包。`
      },
      {
        "q": `登录提示"账号未激活"怎么办？`,
        "a": `请确认是否已按照短信提示完成密码修改。如电脑端可以登录但手机端不行，建议晚点再试（一般是入职当天六点后）。如仍有问题，请联系HR。`
      }
    ]
  },
  {
    "category": `转正相关`,
    "items": [
      {
        "q": `试用期一般多久？`,
        "a": `试用期时长根据岗位和合同约定，通常为3-6个月。具体时间可查阅劳动合同或向HR确认。`
      },
      {
        "q": `转正需要提前多久准备？`,
        "a": `HR会在转正前半个月通过OA工作沟通发出通知，请注意通知时限，不可延迟提交。建议提前准备试用期工作总结（不少于2000字）及相关签字材料。`
      },
      {
        "q": `转正申请表需要谁签字？`,
        "a": `转正申请表需要先由员工本人签字，然后提交给部门领导签署确认，最后交至内勤确认。所有签署完成后在转正日期前提交给HR。`
      },
      {
        "q": `转正后薪资有变化吗？`,
        "a": `转正后薪资按劳动合同约定的转正薪资执行。具体金额可查阅劳动合同或向HR确认。`
      },
      {
        "q": `转正面谈一般聊什么？`,
        "a": `转正面谈通常由直属上级或HR主持，内容包括：试用期工作回顾、工作表现评价、未来工作规划、个人发展期望等。这是双向沟通的好机会。`
      }
    ]
  },
  {
    "category": `离职相关`,
    "items": [
      {
        "q": `离职需要提前多久申请？`,
        "a": `若需覆盖假期：建议至少提前18天发起（保留3天审批+提前5天通知+包含3天假期）。若无影响：建议至少提前10天发起（保留3天审批+提前5天通知）。常规情况最后工作日为正式向HR提出申请满一个月。`
      },
      {
        "q": `Last Working Day是什么意思？`,
        "a": `Last Working Day（最后工作日）指你实际到公司办公的最后一天。这一天你仍需正常打卡上班。离职日期（系统选择日期）为Last Working Day的后一天。`
      },
      {
        "q": `离职证明多久能拿到？`,
        "a": `离职证明将在最后工作日的第二个工作日开具完成。证明文件会加盖公章并扫描电子版，届时通过微信发送，请主动与HR确认接收。也可选择自行回公司领取或到付邮寄。`
      },
      {
        "q": `离职后还能登录公司系统吗？`,
        "a": `离职日期当天起，公司OA、邮箱、悦工作等系统账号将逐步停用。请提前备份个人需要的资料（注意遵守公司信息安全规定）。`
      },
      {
        "q": `离职交接表签字顺序错了怎么办？`,
        "a": `建议严格按照顺序签字（自己→部门领导→内勤→档案室→5楼财务室→5楼行政→未销→朱颖），到朱颖之前全部都要签完，最后是离职考勤。如顺序有误可能导致返工，切记不能删除文档内任何一个字，删了就要重签。`
      }
    ]
  },
  {
    "category": `通用问题`,
    "items": [
      {
        "q": `HR联系方式是什么？`,
        "a": `可通过悦工作搜索HR姓名直接沟通，或发送邮件至HR@company.com。紧急事项建议直接通过悦工作消息联系。`
      },
      {
        "q": `OA系统地址是什么？`,
        "a": `OA首页地址为 https://oa.yuexiuproperty.cn/ ，也可以通过悦工作工作台进入OA入口。`
      },
      {
        "q": `证明文件可以电子版吗？`,
        "a": `离职证明会加盖公章并扫描电子版，届时通过微信发送。目前大多数公司均接受此类电子版离职证明（含实体扫描件）。如需纸质原件也可自行回公司领取或到付邮寄。`
      }
    ]
  }
];
const CARD_COLORS = ['purple','green','blue','amber','pink','coral'];

const ASST_SPRITE = '<img src="attachments/asst-avatar-new.png" alt="HR小助手" style="width:100%;height:100%;object-fit:contain;border-radius:50%;">';

const INTENT_DEFS = [
  {
    intent: 'bereavement',
    synonyms: ['丧假', '丧事', '治丧', '葬礼', '追悼', '白事'],
    contextWords: ['去世', '过世', '离世', '没了', '走了', '逝世', '病故', '祖父', '祖母', '外祖父', '外祖母', '配偶父', '配偶母', '父亲', '母亲', '父母', '配偶', '子女', '亲兄弟', '亲姐妹', '亲属', '家人', '直系', '长辈'],
    answer: `丧假天数标准（按亲属关系）：\n\n1️⃣ 父母、配偶、子女死亡 → 3 天\n2️⃣ 亲兄弟姐妹、配偶父母死亡 → 2 天\n3️⃣ 祖父母、外祖父母死亡 → 1 天\n\n⚠️ 在亲属死亡一个月内连续使用，遇公休假日及法定节假日不另加天数。\n📋 申请须提供死亡证明、关系证明。\n\n💡 更多细节可点击首页「请假指南」→「丧假与独生子女护理假」查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'marriage',
    synonyms: ['婚假', '结婚', '领证', '婚礼', '登记', '婚假期限', '婚假材料', '婚假多久用完'],
    contextWords: ['嫁', '娶', '配偶', '老婆', '老公', '对象', '男朋友', '女朋友', '订婚', '新婚', '摆酒', '办酒', '结婚证'],
    answer: `婚假指南：\n\n💒 天数：法定婚假 3 天（再婚同样适用）\n⏰ 期限：结婚登记后 1 年内一次性使用，逾期视为放弃\n📋 材料：本人书面申请 + 法定结婚证明\n⚠️ 遇公休假日及法定节假日不另加天数\n\n确因工作需要可经审批延期。\n\n💡 更多细节可以点击首页「请假指南」卡片查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'annual_leave',
    synonyms: ['年假', '年休假', '带薪休假'],
    contextWords: ['放假', '休息', '假期天数', '休假天数', '年假天数', '带薪年假', '上一年度'],
    answer: `年假天数根据累计工作年限计算：\n\n1️⃣ 累计工作 1~10 年：5 天\n2️⃣ 累计工作 10~20 年：10 天\n3️⃣ 累计工作 20 年以上：15 天\n\n⚠️ 年假有效期为每年 1 月 1 日至次年 3 月 31 日，过期作废哦。\n\n💡 更多细节可以点击首页「请假指南」卡片查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'sick',
    synonyms: ['病假', '病休', '生病', '感冒', '不舒服', '发烧', '头疼', '咳嗽', '医疗期', '病假工资', '病假扣款', '病假待遇'],
    contextWords: ['住院', '手术', '看病', '急诊', '就医', '医院', '身体不舒服', '发热', '喉咙痛', '肚子疼', '胃疼', '扭伤', '骨折', '打针', '输液', '挂号', '检查', '诊断', '诊断证明', '病历', '病假条'],
    answer: `病假指南：\n\n🚑 **急病/急诊**：来不及提前请假？先电话口头报告主管，次日下班前补交申请+有效证明即可！\n\n📋 正常申请流程：通过 OA/EAS 系统提交，原则上提前3个工作日\n⚠️ 连续病假超10天须提供诊断证明、化验单、医疗费用发票\n\n💰 病假工资（连续停工超3天起算）：\n· 工龄不满5年 → 固定工资 45%\n· 满5年不满10年 → 50%\n· 满10年不满20年 → 55%\n· 满20年及以上 → 60%\n· 劳动模范 → 65%\n（不低于当地最低工资标准80%）\n\n🏥 医疗期：根据工龄3个月～36个月不等，具体可查看请假指南。\n\n💡 更多细节可以点击首页「请假指南」卡片查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'personal',
    synonyms: ['事假', '私事', '事假扣款', '事假工资', '事假扣钱'],
    contextWords: ['有事', '请假'],
    answer: `事假指南：\n\n📋 申请：原则上提前3个工作日，通过 OA/EAS 提交\n💰 扣款：扣款金额 = 请假天数 × 月固定工资 ÷ 21.75\n⚠️ 事假天数作为绩效考核评价指标，直接影响绩效奖金\n\n续假需提前办理，逾期未办按旷工处理。\n\n💡 更多细节可以点击首页「请假指南」卡片查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'maternity',
    synonyms: ['产假', '陪产假', '产检假', '哺乳假', '流产假', '计生假', '生育'],
    contextWords: ['生育', '生娃', '生孩子', '怀孕', '待产', '哺乳', '喂奶', '流产', '计生', '要生了', '快生了', '配偶', '生宝宝', '坐月子', '月子', '生产', '临产', '预产期', '分娩', '剖腹产', '顺产', '产后'],
    answer: `生育类假期包括：\n\n👩 产假：98 天基础 + 80 天奖励 = 178 天\n👨 陪产假：15 天\n🤰 产检假：按需安排\n🍼 哺乳假：每天 1 小时至婴儿满 1 周岁\n\n⚠️ 难产增加 30 天，多胞胎每多一胎增加 15 天。\n\n💡 更多细节可以点击首页「请假指南」卡片查看～`,
    leadTo: '请假指南'
  },
  {
    intent: 'care',
    synonyms: ['护理假', '看护假', '独生子女假', '独生子女'],
    contextWords: ['独生子女', '照顾', '看护', '父母', '父亲', '母亲', '爸妈', '生病', '住院', '住院治疗'],
    answer: `<b>独生子女护理假（2021年12月新规）</b><br><br><b>适用条件：</b>父母双方或一方为<b>广东省户籍</b>，且年满60周岁以上的独生子女。<br><br><b>天数标准：</b><br>· 父母年满60周岁 → 每年<b>5天</b>护理假<br>· 父母患病住院治疗的 → 每年累计不超过<b>15天</b>（含前述5天）<br>· 父母双方均满60岁 → 每年仍只享受5天（<span style="color:#c00">不叠加</span>）<br><br><b>使用方式：</b>可拆分请休，原则上不超过<b>2次</b>。<br><br><b>工资待遇：</b>护理假期间工资照发，不影响福利待遇和全勤评奖。`,
    leadTo: '请假指南'
  },
  {
    intent: 'attendance',
    synonyms: ['考勤', '打卡', '补卡', '上班卡', '下班卡', '缺卡'],
    contextWords: ['漏刷', '漏打', '没打', '忘打卡', '忘记打卡', '忘记签到', '忘带', '考勤异常', '考勤申诉', '签退', '刷脸', '指纹', '没打卡', '忘记打上班卡', '忘记打下班卡', '没打上班卡', '没打下班卡', '忘打上班卡', '忘打下班卡'],
    answer: `考勤打卡相关：\n\n🕐 打卡方式：使用钉钉进行上下班打卡\n📱 补卡流程：漏打卡可在钉钉提交补卡申请（每月限 3 次，次月 3 日前处理）\n⚠️ 迟到处理：≤10分钟且本月≤3次可忽略；超10分钟或>3次需补卡\n\n💡 迟到/缺卡/早退等具体场景，直接描述我会帮你精准解答～\n\n💡 更多细节可以点击首页「考勤指引」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'promotion',
    synonyms: ['转正', '试用期', '考核'],
    contextWords: ['转岗', '调岗', '晋升'],
    answer: `员工转正流程包含 7 个阶段：\n\n1️⃣ 入职阶段 — 签署合同、领取《试用期员工转正申请表》\n2️⃣ 试用期管理 — 直属上级月度考核\n3️⃣ 转正申请 — 试用期满前 2 周提交申请\n4️⃣ 部门审批 — 直属上级 + 部门负责人审批\n5️⃣ 准备材料 — 考核目标责任书等附件\n6️⃣ HR审批 — HR部门审核\n7️⃣ 转正生效 — 通过后正式转正\n\n💡 更多细节可以点击首页「我要转正」卡片查看～`,
    leadTo: '我要转正'
  },
  {
    intent: 'resign',
    synonyms: ['离职', '辞职', '辞工', '退工'],
    contextWords: ['不干了', '不做了', '辞退', '走人', '离开公司', '辞职信', '离职手续', '交接', '不做了', '辞职报告'],
    answer: `离职流程包含 6 个步骤：\n\n1️⃣ 提交离职申请\n2️⃣ 直属上级审批\n3️⃣ 工作交接\n4️⃣ 归还公司资产\n5️⃣ 办理离职手续\n6️⃣ 结算工资\n\n⚠️ 正式员工需提前 30 天提出，试用期员工提前 3 天。\n\n💡 更多细节可以点击首页「我要离职」卡片查看（需输入密码）～`,
    leadTo: '我要离职'
  },
  {
    intent: 'account',
    synonyms: ['悦工作', '钉钉', '账号', '登录', '密码'],
    contextWords: ['激活', '注册', '初始密码', '登不上', '无法登录', '忘记密码', '重置密码', '改密码', '登陆', '登陆不了'],
    answer: `账号开通包含 4 个步骤：\n\n1️⃣ 获取账号 — HR 分配悦工作账号和初始密码\n2️⃣ 激活悦工作 — 首次登录修改密码\n3️⃣ 注册钉钉 — 使用公司手机号注册\n4️⃣ 加入组织 — 扫码加入公司钉钉组织\n\n⚠️ 如遇登录问题，可联系 IT 服务台协助。\n\n💡 更多细节可以点击首页「账号开通」卡片查看～`,
    leadTo: '账号开通'
  },
  {
    intent: 'it',
    synonyms: ['电脑', '打印机', 'wifi', '网络', '报修', 'it', '驱动'],
    contextWords: ['打印', '连接', '上网', '连不上', '坏了', '故障', '服务台', '鼠标', '键盘', '显示器', '网线'],
    answer: `IT 办公指引涵盖：\n\n💻 电脑配置 — 新员工入职电脑领用\n🖨️ 打印机连接 — 部门打印机驱动安装与常见问题\n📶 WiFi/网络 — 公司 WiFi 账号密码及故障排查\n\n💡 更多细节可以点击首页「IT办公指引」卡片查看～`,
    leadTo: 'IT办公指引'
  },
  {
    intent: 'insurance',
    synonyms: ['商业保险', '补充医疗', '医保', '保险', '理赔', '报销', '企业宝', '平安'],
    contextWords: ['参保', '投保', '家属', '二维码', '下载', '材料', '发票', '看病', '住院', '门诊', '开证明'],
    answer: `公司统一为全体员工购买补充医疗保险，依托「平安企业宝」APP 自助理赔 🛡️\n\n📝 参保办理：员工本人参保提供身份证号给 HR；为家属（父/母/子女）投保需提供姓名、关系、身份证号，子女未满 2 周岁加出生证，每月月底统一办理。\n\n📱 下载「平安企业宝」APP，拍照上传发票即可理赔，最快当天到账。\n\n💡 更多细节可以点击首页「商业保险」卡片查看～`,
    leadTo: '商业保险'
  },
  {
    intent: 'salary',
    synonyms: ['工资', '薪资', '绩效', '奖金', '裁员'],
    contextWords: ['扣钱', '发工资', '涨薪', '降薪', '辞退'],
    answer: `这个问题涉及到个人具体情况，我暂时无法准确回答 😅\n\n建议直接联系 HR 部门或你的直属上级沟通，他们会给你最准确的答复哦～🙏`,
    leadTo: null
  },
  {
    intent: 'compensatory_leave',
    synonyms: ['调休', '调休假', '补休', '补偿假', '加班调休', '加班换休', 'OT假'],
    contextWords: ['没到账', '还没到', '结算', '结转', '余额', '少了', '不对', '不批', '抵扣', '到账', '怎么还没', '期限', '过期', '有效期', '休完', '怎么休', '怎么请', '还剩'],
    answer: `调休假（加班调休）指南：\n\n📋 来源：平日/周末加班按 1:1 兑换调休假\n⏰ 结算：加班后一般 2-3 天内结转，HR 每天都会处理\n⏳ 有效期：3 个月内休完，过期不补（系统如显示1年为bug）\n📱 申请：在钉钉/OA 提交调休申请，直属上级审批\n\n⚠️ 常见问题：\n· 一周还没到账 → 确认加班流程是否后补，后补则发 IT 单\n· 调休假少了 → 行政班默认 9-18 结算，跨午休扣 1 小时\n· 不批调休假 → 半天/全天为最小单位（不能1小时休假）\n· 半天调休假可抵扣迟到，但1小时不行\n💡 更多细节可点击首页「考勤指引」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'fieldwork',
    synonyms: ['外勤', '外出办公', '出差', '外出', '外派'],
    contextWords: ['打卡', '拍照', '忘打卡', '缺卡', '显示缺卡', '不批', '后补', '临时', '不外出', '取消', '早退', '提前回来', '西塔', '报备'],
    answer: `外勤指南：\n\n📱 申请：在钉钉提交外勤申请，选择外勤时间和地点\n📸 打卡：外勤到岗后需在钉钉拍照打卡\n⚠️ 常见问题：\n· 申请了外勤还显示缺卡 → 可能打卡未成功，及时补卡\n· 临时不外出 → 撤销外勤申请，正常打卡\n· 提前回来显示早退 → 联系 HR 说明情况\n· 外勤忘打卡 → 当月 3 次补卡机会内提交补卡申请\n\n💡 更多细节可点击首页「考勤指引」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'overtime',
    synonyms: ['加班', 'OT', '加班费', '加班申请'],
    contextWords: ['工作日', '周末', '晚上', '后补', '计算', '错了', '算错', '超出', '申请时间', '打卡', '饭点', '午休', '一线', '行政班', '晚班', '时长', '怎么算', '不批'],
    answer: `加班指南：\n\n📅 工作日加班：需提前申请，行政班 18:30 后起算\n📅 周末加班：仅能选半天（4h）或一天（8h），按实际打卡结算\n⏰ 上限：每月不超过 36 小时\n⚠️ 常见问题：\n· 超出申请时间 → 按最长申请时间结算，下次预估好再申请\n· 时间算错 → 系统仅识别申请时段内的打卡记录\n· 跨饭点 → 横跨午休扣 1 小时（如 9:00-15:00 结算 5h）\n· 一线 vs 行政班 → 排班同事按实际打卡结算\n· 行政班加班迟到或缺卡 → 不能补卡！加班当天务必准时\n\n💡 更多细节可点击首页「考勤指引」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'clock_fail',
    synonyms: ['打卡失败', 'IT单', '发IT单', 'it单', '打不了卡'],
    contextWords: ['钉钉', '系统', 'bug', '卡死', '闪退', '更新', '升级', '定位', '不在范围', '写什么', '怎么发', '怎么写'],
    answer: `打卡失败处理：\n\n🔧 当天打卡失败 → 立即截图保存，提交补卡申请并备注原因\n📅 第二天才发现 → 仍可提交补卡申请（当月3次机会以内）\n📋 发 IT 单 → 打开钉钉 → 工作台 → IT服务 → 新建工单\n📝 IT 单内容建议写：姓名、部门、打卡时间、失败原因（附截图）\n\n💡 更多细节可点击首页「考勤指引」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'leave_operation',
    synonyms: ['撤假', '消假', '销假', '请错假', '不想休', '组合假', '同时请', '旷工', '排班', '半天假', '后补', '请假证明', '请假要证明', '请假要什么证明', '请假材料', '请假需要什么'],
    contextWords: ['请错了', '不想要', '取消', '显示旷工', '怎么选', '多天', '一次性', '同时请假', '两类假', '请假要证明', '请假证明', '请假材料', '需要什么材料', '请假'],
    answer: `请假操作指南：\n\n🔄 请了假不想休 → 在审批通过前可撤销；已通过则联系 HR 处理\n📅 一次性请多天 → 正常提交，选择起止日期即可\n⚠️ 组合假期 → 全天建议用同一假期类型（不要上午调休下午年假）\n📋 后补请假 → 急诊/突发生病/加班调休未到账等场景可后补，需备注原因\n📐 排班制半天假 → 按排班时间半天计算\n🚫 显示旷工 → 检查是否拆分假期类型导致系统误判，联系 HR 核实\n\n💡 更多细节可点击首页「考勤指引」或「请假指南」卡片查看～`,
    leadTo: '考勤指引'
  },
  {
    intent: 'greeting',
    synonyms: ['你好', '嗨', '在吗', 'hello', 'hi'],
    contextWords: [],
    answer: `你好呀～ 👋\n\n我是 HR小助手，关于考勤、请假、转正、离职等 HR 问题都可以问我！\n\n你可以：\n🔍 直接在输入框打字提问\n💡 点击下方快捷标签快速查询\n📱 或者点击「模块卡片」查看详细操作指引`,
    leadTo: null
  }
];

const FOLLOWUP_PATTERNS = [
  /^那(.+)/, /^还有(.+)/, /^怎么申请/, /^怎么办理/, /^怎么操作/,
  /^流程呢/, /^然后呢/, /^接下来/, /^需要什么材料/, /^要多久/,
  /^条件是什么/, /^几天/, /^多少天/, /^几天假/, /^什么流程/
];

const REVISIT_PATTERNS = [
  /^如果是(.+)/, /^如果(.+)/, /^那如果是(.+)/, /^那如果(.+)/, /^假如(.+)/, /^假设(.+)/,
  /^那(.+)呢/, /^.+的话呢/, /^要是(.+)/, /^万一(.+)/
];

const WIZARD_DEFS = {
  // 迟到 → 收集分钟数 + 次数 → 查制度给精准建议
  attendance_late: {
    trigger: ['迟到', '晚到', '睡过头', '起晚了', '堵车', '晚了'],
    intro: '关于迟到，我需要了解两个小细节才能给你最准确的建议～',
    steps: [
      {
        key: 'minutes',
        ask: '你这次大概迟到了几分钟呢？（比如：5分钟以内 / 10到30分钟 / 超过1小时）',
        retryAsk: '我没太理解～用数字说就可以哦，比如：不到10分钟、20分钟左右、1个多小时',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          // 超过1小时
          if (/[1-9]\s*(个|小)?时|60分|六十分|超过.*小时|快.*小时|多小时/.test(kw)) return '>60';
          // 10-60分钟
          const m = kw.match(/(\d+)\s*分/);
          if (m) {
            const v = parseInt(m[1]);
            if (v > 10 && v <= 60) return '10-60';
            if (v <= 10) return '≤10';
          }
          if (/半(个|小)时|30分|三十/.test(kw)) return '10-60';
          if (/十分|十五分|二十分|二十多分|十几分/.test(kw)) return '10-60';
          if (/几分钟|一会儿|一下下|不到十|不到10|五分|七分|八分|九分|十分/.test(kw)) return '≤10';
          if (/不到[1一].*分/.test(kw)) return '≤10';
          return null;
        }
      },
      {
        key: 'count',
        ask: '再确认一下：这是你这个月第几次迟到呢？（第1次 / 第2次 / 第3次 / 超过3次了）',
        retryAsk: '说第几次就可以哦～比如：第一次、第3次、超过3次了',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/第[4-9]|第[1-9]\d|超过3|超过三|好多|好几|经常|总是|第n|多次/.test(kw)) return '>3';
          if (/第3|第三|三次/.test(kw)) return '3';
          if (/第2|第二|两次/.test(kw)) return '2';
          if (/第1|第一|头.*[次回]|初次/.test(kw)) return '1';
          if (/^(1|2|3)$/.test(kw.trim())) return kw.trim();
          return null;
        }
      }
    ],
    resolve: function(answers) {
      const mins = answers.minutes;
      const count = parseInt(answers.count);
      if (mins === '>60') {
        return '你迟到超过1小时了，这种情况请联系HR部门，依照公司制度处理。如有不可抗力因素（极端天气、交通事故等），建议保留相关证明。\n\n💡 更多细节可点击首页「考勤指引」卡片查看～';
      }
      if (mins === '≤10' && count <= 3) {
        return '你迟到了不到10分钟，且本月在3次以内～\n\n✅ 这种情况无需任何处理，系统提醒可忽略。\n\n不过下次还是尽量准时哦 💪';
      }
      // 需要补卡的情况
      const remaining = 3 - count;
      const countNote = remaining > 0
        ? `\n\n⚠️ 本月还有 ${remaining} 次补卡机会，记得最迟在次月3日前处理完毕。`
        : '\n\n⚠️ 本月3次补卡机会已用完！后续迟到将无法补卡，请务必准时打卡。';
      return `根据你的情况（迟到约${mins === '≤10' ? '不到10分钟' : '10分钟以上'}，本月第${count}次迟到）：\n\n📋 请在钉钉提交补卡申请，备注「迟到超过10分钟」。\n\n💡 提示：半天调休假可抵扣迟到（不能1小时抵扣）。${countNote}\n\n💡 更多细节可点击首页「考勤指引」卡片查看～`;
    },
    fallback: '迟到相关建议：\n\n📋 钉钉提交补卡申请，备注迟到原因\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理\n💡 半天调休假可抵扣迟到（不能1小时抵扣）\n\n💡 点击首页「考勤指引」卡片可查看详细规则～',
    leadTo: '考勤指引'
  },

  // 缺卡 → 先问上下班卡 → 再问原因 → 给建议
  attendance_miss: {
    trigger: ['缺卡', '忘打卡', '漏刷', '漏打', '怎么补卡', '补卡怎么弄', '忘打卡怎么办', '没打卡',
             '上班卡', '下班卡', '忘记打上班卡', '忘记打下班卡', '没打上班卡', '没打下班卡',
             '忘打上班卡', '忘打下班卡', '上班卡忘了打', '下班卡忘了打',
             '打卡上班', '打卡下班'],
    intro: '关于缺卡补卡，我先确认一下～',
    steps: [
      {
        key: 'cardType',
        ask: '你忘记打的是上班卡还是下班卡呢？',
        retryAsk: '告诉我忘记打上班卡还是下班卡就行～',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/上班卡|打卡上班|上班|早上|上午|来的时候|进门|签到/.test(kw)) return '上班卡';
          if (/下班卡|打卡下班|下班|晚上|下午|走的时候|离开|签退|回去/.test(kw)) return '下班卡';
          return null;
        }
      },
      {
        key: 'reason',
        ask: '是什么情况导致的缺卡呢？（忘记打卡 / 外勤忘带手机 / 系统故障 / 其他）',
        retryAsk: '简单描述一下就好～比如：忘记了、外出没带手机、钉钉出问题了',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/忘记|忘了|没想起来|疏忽|大意|忘打/.test(kw)) return 'forgot';
          if (/外勤|外出|出外|外面|不在公司|出差/.test(kw)) return 'out';
          if (/故障|坏了|系统|bug|卡死|闪退|更新|升级/.test(kw)) return 'fault';
          if (/起晚|迟到|睡过|堵车/.test(kw)) return 'late';
          return 'other';
        }
      },
      {
        key: 'count',
        ask: '这是你这个月第几次缺卡呢？（第1次 / 第2次 / 第3次 / 超过3次了）',
        retryAsk: '说第几次就可以哦～比如：第一次、第3次、超过3次了',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/第[4-9]|第[1-9]\d|超过3|超过三|好多|好几|经常|总是|第n/.test(kw)) return '>3';
          if (/第3|第三|三次/.test(kw)) return '3';
          if (/第2|第二|两次/.test(kw)) return '2';
          if (/第1|第一|头.*[次回]|初次/.test(kw)) return '1';
          if (/^(1|2|3)$/.test(kw.trim())) return kw.trim();
          return null;
        }
      }
    ],
    shouldFinish: function(state) {
      // 用户明确说了上班卡或下班卡 → 直接给答案，不再问"上班还是下班"
      if (state.answers.cardType === '上班卡' || state.answers.cardType === '下班卡') return true;
      return false;
    },
    resolve: function(answers) {
      if (answers.cardType === '下班卡') {
        return '忘记打下班卡直接补卡即可～\n\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理。\n\n💡 更多细节可点击首页「考勤指引」卡片查看～';
      }
      // 上班卡缺卡 → 先报备HR，再补卡并备注
      // 用户明确说"上班卡"默认视为忘记原因
      if (!answers.reason) answers.reason = 'forgot';
      let tip = '忘记打上班卡，请按以下步骤操作：\n\n';
      tip += '① 先向 HR 报备说明情况\n';
      tip += '② 报备后，在钉钉提交补卡申请，并在备注中写明「忘记打卡，已报备HR」及具体原因\n';
      if (answers.reason === 'out') {
        tip += '\n💡 外勤忘带手机的情况，建议同时报备直属上级。';
      }
      if (answers.reason === 'forgot') {
        tip += '\n📝 私人原因年度2次内可补卡，下载群内登记表填写，备注情况后由部门负责人签字。';
      }
      if (answers.reason === 'fault') {
        tip += '\n💡 系统故障建议截图保留，备注具体原因后提交补卡申请。';
      }
      tip += `\n\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理。`;
      // 仅当用户明确说了次数才显示剩余次数
      if (answers.count !== undefined && answers.count !== null && !isNaN(parseInt(answers.count))) {
        const count = parseInt(answers.count);
        const remaining = 3 - count;
        if (remaining > 0) {
          tip += `\n\n本月还可补卡 ${remaining} 次。`;
        } else {
          tip += '\n\n⚠️ 本月3次补卡机会已用完，后续缺卡将无法补卡。';
        }
      }
      tip += '\n\n💡 更多细节可点击首页「考勤指引」卡片查看～';
      return tip;
    },
    fallback: '缺卡补卡指引：\n\n📋 上班卡缺卡：先报备HR说明情况，再在钉钉提交补卡申请并备注清楚原因\n📋 下班卡缺卡：直接在钉钉提交补卡申请即可\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理\n\n💡 点击首页「考勤指引」卡片可查看详细规则～',
    leadTo: '考勤指引'
  },

  // 早退
  attendance_early: {
    trigger: ['早退', '提前走', '早走'],
    intro: '关于早退，需要了解一下细节～',
    steps: [
      {
        key: 'minutes',
        ask: '你提前离开了大概多少分钟呢？',
        retryAsk: '用数字说就可以哦～比如：15分钟、半小时',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/[1-9]\s*(个|小)?时|60分|六十分/.test(kw)) return '>60';
          const m = kw.match(/(\d+)\s*分/);
          if (m) {
            const v = parseInt(m[1]);
            if (v > 10) return '>10';
            return '≤10';
          }
          if (/半(个|小)时|30分|三十/.test(kw)) return '>10';
          if (/几分钟|一会儿|一下|不到十|不到10/.test(kw)) return '≤10';
          return null;
        }
      },
      {
        key: 'count',
        ask: '这是你这个月第几次早退呢？',
        retryAsk: '说第几次就可以哦～',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/第[4-9]|第[1-9]\d|超过3|超过三|好多|好几|经常/.test(kw)) return '>3';
          if (/第3|第三|三次/.test(kw)) return '3';
          if (/第2|第二|两次/.test(kw)) return '2';
          if (/第1|第一|头.*[次回]|初次/.test(kw)) return '1';
          if (/^(1|2|3)$/.test(kw.trim())) return kw.trim();
          return null;
        }
      }
    ],
    resolve: function(answers) {
      const count = parseInt(answers.count);
      const remaining = 3 - count;
      return `早退处理建议：\n\n📋 请在钉钉提交补卡申请，备注早退原因。\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理。${remaining > 0 ? '\n\n本月还可补卡 ' + remaining + ' 次。' : '\n\n⚠️ 本月补卡机会已用完！'}\n\n💡 如有特殊情况（身体不适等），建议提前告知直属上级。\n\n💡 更多细节可点击首页「考勤指引」卡片查看～`;
    },
    fallback: '早退处理建议：\n\n📋 钉钉提交补卡申请，备注早退原因\n⚠️ 每月只有3次补卡机会，最迟次月3日前处理\n💡 如有特殊情况建议提前告知直属上级\n\n💡 点击首页「考勤指引」卡片可查看详细规则～',
    leadTo: '考勤指引'
  },

  // 丧假 → 收集与逝者关系 → 精准天数
  bereavement_days: {
    trigger: ['丧假几天', '能请几天', '丧假天数', '可以请几天丧假', '几天丧假', '去世', '走了', '过世', '离世', '病故', '不在了', '没了', '逝世', '亲人走了', '家人去世', '爷爷走了', '奶奶走了', '爸爸走了', '妈妈走了', '外公走了', '外婆走了', '岳父走了', '岳母走了', '哥哥走了', '姐姐走了'],
    intro: '丧假天数取决于与逝者的关系，我来帮你确认一下～',
    steps: [
      {
        key: 'relation',
        ask: '方便告知是您的哪位亲人吗？（如：父母/配偶/子女，兄弟姐妹/公婆，祖父母/外祖父母）',
        retryAsk: '简单说一下关系就好，比如：我爸爸、我奶奶、我岳父',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          // Tier 1: 直系亲属 → 3天
          if (/父母|爸爸|妈妈|父亲|母亲|老爸|老妈/.test(kw) && !/祖|外|岳|公|婆/.test(kw)) return 'tier1';
          if (/配偶|老公|老婆|爱人|丈夫|妻子/.test(kw)) return 'tier1';
          if (/子女|儿子|女儿|孩子|小孩|娃/.test(kw)) return 'tier1';
          // Tier 2: 兄弟姐妹/配偶父母 → 2天
          if (/亲兄弟|亲姐妹|哥哥|弟弟|姐姐|妹妹/.test(kw)) return 'tier2';
          if (/配偶父|配偶母|公公|婆婆|岳父|岳母|老丈人|丈母娘/.test(kw)) return 'tier2';
          // Tier 3: 祖辈 → 1天
          if (/祖|外祖父|外祖母|爷爷|奶奶|姥爷|姥姥|外公|外婆/.test(kw)) return 'tier3';
          return null;
        }
      }
    ],
    resolve: function(answers) {
      const r = answers.relation;
      if (r === 'tier1') return '父母、配偶、子女逝世的，可以请丧假 3 天。\n\n⚠️ 在亲属死亡一个月内连续使用，遇公休假日及法定节假日不另加天数。\n📋 申请须提供死亡证明、关系证明。\n\n💡 更多细节可点击首页「请假指南」→「丧假与独生子女护理假」查看～';
      if (r === 'tier2') return '亲兄弟姐妹、配偶父母逝世的，可以请丧假 2 天。\n\n⚠️ 在亲属死亡一个月内连续使用，遇公休假日及法定节假日不另加天数。\n📋 申请须提供死亡证明、关系证明。\n\n💡 更多细节可点击首页「请假指南」→「丧假与独生子女护理假」查看～';
      return '祖父母、外祖父母逝世的，可以请丧假 1 天。\n\n⚠️ 在亲属死亡一个月内连续使用，遇公休假日及法定节假日不另加天数。\n📋 申请须提供死亡证明、关系证明。\n\n💡 更多细节可点击首页「请假指南」→「丧假与独生子女护理假」查看～';
    },
    leadTo: '请假指南'
  },

  // 年假 → 工作年限 → 精准天数
  annual_leave_days: {
    trigger: ['年假几天', '年假多少天', '年假天数', '能休几天年假', '年假有几天', '我要请年假', '请年假', '年假怎么算'],
    intro: '年假天数根据累计工作年限不同，我来帮你查～',
    steps: [
      {
        key: 'years',
        ask: '请问你的累计工作年限大概在哪个范围呢？（1到10年 / 10到20年 / 20年以上）',
        retryAsk: '说一个范围就可以哦～比如：5年、12年、20年以上',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/20|二十/.test(kw)) return '20+';
          const m = kw.match(/(\d+)/);
          if (m) {
            const v = parseInt(m[1]);
            if (v >= 20) return '20+';
            if (v >= 10) return '10-20';
            return '1-10';
          }
          if (/初入职场|刚工作|毕业|应届|第一[年份]/.test(kw)) return '1-10';
          if (/老员工|资深|多年/.test(kw)) return '20+';
          return null;
        }
      }
    ],
    resolve: function(answers) {
      const y = answers.years;
      const table = { '1-10': '5 天', '10-20': '10 天', '20+': '15 天' };
      return `根据累计工作年限，你的年假为：${table[y] || '请确认工作年限'}\n\n⚠️ 年假有效期为每年 1 月 1 日至次年 3 月 31 日，过期作废哦。\n\n💡 更多细节可点击首页「请假指南」卡片查看～`;
    },
    leadTo: '请假指南'
  },

  // 病假 → 天数 → ≤3天 vs >3天
  sick_proof: {
    trigger: ['病假证明', '病假要什么材料', '请病假要证明吗', '请病假需要什么', '病假材料', '病假怎么请', '我要请病假', '请病假', '生病请假', '发烧请假', '感冒请假'],
    intro: '病假需要的材料取决于请假天数，我帮你确认一下～',
    steps: [
      {
        key: 'days',
        ask: '你计划请几天病假呢？（1-3天 / 超过3天）',
        retryAsk: '说天数就可以哦～比如：2天、5天',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          const m = kw.match(/(\d+)\s*天/);
          if (m) {
            const v = parseInt(m[1]);
            return v > 3 ? '>3' : '≤3';
          }
          if (/超过3|超过三|3天以上|三天以上|好几天|一周|一星期|住院/.test(kw)) return '>3';
          if (/[1-3]天|一天|两天|三天|一两天/.test(kw)) return '≤3';
          if (/\d+/.test(kw)) {
            const v = parseInt(kw.match(/\d+/)[0]);
            return v > 3 ? '>3' : '≤3';
          }
          return null;
        }
      }
    ],
    resolve: function(answers) {
      if (answers.days === '>3') {
        return '病假超过 3 天，需要提供医院出具的诊断证明。\n\n📋 申请材料：\n1️⃣ 医院诊断证明（需盖医院公章）\n2️⃣ 通过 OA/EAS 提交病假申请\n\n⚠️ 急诊情况可先口头报告，事后补交申请和病假证明。\n⚠️ 病假期间工资按公司规定比例发放。\n\n💡 更多细节可点击首页「请假指南」卡片查看～';
      }
      return '病假 3 天以内，具体流程如下：\n\n1️⃣ 通过 OA/EAS 系统提交病假申请\n2️⃣ 口头报告直属上级\n\n📋 一般不需提交诊断证明（急诊情况事后补交即可）。\n\n⚠️ 病假期间工资按公司规定比例发放，具体可查阅休假管理细则。\n\n💡 更多细节可点击首页「请假指南」卡片查看～';
    },
    leadTo: '请假指南'
  },

  // 生育类 → 哪种类型 → 精准信息
  maternity_type: {
    trigger: ['生育假', '产假几天', '陪产假', '产检假', '哺乳假', '生育能请什么假'],
    intro: '生育类假期有好几种，你先告诉我具体需要哪一种～',
    steps: [
      {
        key: 'type',
        ask: '请问你需要哪种假期呢？（产假 / 陪产假 / 产检假 / 哺乳假）',
        retryAsk: '选一种就好～比如：产假、陪产假',
        parse: function(s) {
          const kw = normalizeSlang(s.toLowerCase());
          if (/产检/.test(kw)) return '产检假';
          if (/陪产|男方|老公|老婆生/.test(kw)) return '陪产假';
          if (/哺乳|喂奶|挤奶/.test(kw)) return '哺乳假';
          if (/流产/.test(kw)) return '流产假';
          if (/产假|生产|生娃|生宝宝|生育|坐月子/.test(kw)) return '产假';
          return null;
        }
      }
    ],
    resolve: function(answers) {
      const map = {
        '产假': '👩 产假：98 天基础 + 80 天奖励 = 178 天\n⚠️ 难产增加 30 天，多胞胎每多一胎增加 15 天。',
        '陪产假': '👨 陪产假：15 天\n需在子女出生后一个月内休完。',
        '产检假': '🤰 产检假：按需安排\n怀孕期间必要的产检时间可正常请假。',
        '哺乳假': '🍼 哺乳假：每天 1 小时\n至婴儿满 1 周岁为止，可分次使用。',
        '流产假': '📋 流产假：按医嘱执行\n根据怀孕周期不同，假期天数不同，具体以医院证明为准。'
      };
      return (map[answers.type] || '请告知具体的假期类型哦～') + '\n\n💡 更多细节可点击首页「请假指南」卡片查看～';
    },
    leadTo: '请假指南'
  }
};

const SLANG_MAP = [
  // 祖辈
  ['姥爷', '外祖父'], ['姥姥', '外祖母'], ['外婆', '外祖母'],
  // 父母辈
  ['公公', '配偶父'], ['婆婆', '配偶母'],
  ['岳父', '配偶父'], ['岳母', '配偶母'], ['老丈人', '配偶父'], ['丈母娘', '配偶母'],
  ['老爸', '父亲'], ['老妈', '母亲'],
  // 配偶
  ['老公', '配偶'], ['老婆', '配偶'], ['爱人', '配偶'],
  // 子女
  ['儿子', '子女'], ['女儿', '子女'], ['孩子', '子女'], ['小孩', '子女'], ['娃', '子女'],
  // 兄弟姐妹
  ['哥哥', '亲兄弟'], ['弟弟', '亲兄弟'], ['姐姐', '亲姐妹'], ['妹妹', '亲姐妹'],
  // 婚恋
  ['扯证', '结婚'], ['办酒', '结婚'], ['摆酒', '结婚'], ['新婚', '结婚'], ['结婚证', '结婚'],
  // 生育
  ['坐月子', '产假'], ['月子', '产假'], ['生小孩', '生育'], ['生产', '生育'], ['临产', '生育'], ['分娩', '生育'], ['预产期', '生育'],
  // 考勤
  ['忘记打卡', '忘打卡'], ['忘记签到', '忘打卡'], ['没打卡', '忘打卡'],
  ['忘记打上班卡', '忘打上班卡'], ['忘记打下班卡', '忘打下班卡'],
  ['没打上班卡', '忘打上班卡'], ['没打下班卡', '忘打下班卡'],
  ['上班卡忘了打', '忘打上班卡'], ['下班卡忘了打', '忘打下班卡'],
  ['刷脸', '打卡'], ['指纹', '打卡'], ['签退', '打卡'],
  ['上班卡', '打卡上班'], ['下班卡', '打卡下班'],
  // 离职
  ['不做了', '离职'], ['走人', '离职'], ['辞职信', '离职'], ['离职手续', '离职'], ['交接', '离职'],
  // 调休/补休
  ['调休还没到', '调休假没到账'], ['加班换假', '加班调休'], ['加班调的假', '加班调休'],
  ['补休还没到', '调休假没到账'], ['没到账', '调休假没到账'],
  // 外勤
  ['去外面', '外勤'], ['出外', '外勤'], ['去客户', '外勤'], ['上外头', '外勤'],
  // 加班
  ['加个班', '加班'], ['加点', '加班'], ['ot', '加班'],
  // 请假操作
  ['撤消请假', '撤假'], ['取消请假', '撤假'], ['不喜欢了', '不想休'],
  ['请错日子', '请错假'], ['两样假', '组合假'], ['混合请', '组合假'],
  // 打卡失败
  ['打不了', '打卡失败'], ['没打上', '打卡失败'], ['打卡不成', '打卡失败'],
  ['it服务', 'IT单'], ['发工单', 'IT单'], ['报修单', 'IT单'],
];

// ====== 「更多」汇总/常用页 数据 ======
const MORE_PAGE = {
  // 制度文件入口：点击直接打开对应模块「经典文档」视图（政策原文已在应用内渲染）
  docs: [
    { label: '考勤宝典（持续更新中）', module: 'attendance', desc: '打卡、迟到、补卡、加班、请假全规则' },
    { label: '员工休假管理细则', module: 'leave', desc: '年假 / 病假 / 产假 / 婚假等各类假期规定' },
    { label: '员工补充医疗保障指引', module: 'insurance', desc: '商业保险参保、理赔、报销说明' },
  ],
  // 常用下载：转正 / 离职相关表单（已在附件目录部署）
  downloads: [
    { name: '附件1-试用期员工转正申请表', file: 'attachments/附件1-试用期员工转正申请表.doc', icon: '📄' },
    { name: '附件2-员工试用期考核目标责任书', file: 'attachments/附件2-员工试用期考核目标责任书.xlsx', icon: '📊' },
    { name: '附件1-工作交接表', file: 'attachments/附件1-工作交接表.doc', icon: '📄' },
    { name: '附件2-离职员工考勤表（联系内勤员填写）', file: 'attachments/附件2-离职员工考勤表（联系内勤员填写）.docx', icon: '📄' },
    { name: '附件3-离职（调动）手续办理表', file: 'attachments/附件3-离职（调动）手续办理表（请勿删除括号里隐藏文字）.docx', icon: '📄' },
  ],
  // 高频问题 Top（精选自建议索引，点击直接看答案）
  // q = 用户问法（展示用）；target = 索引中真实存在的关键词/标题（精确命中用）
  faqTop: [
    { q: '年假有几天', target: '年假天数标准' },
    { q: '怎么补卡', target: '没打上班卡' },
    { q: '迟到怎么处理', target: '迟到了怎么办' },
    { q: '怎么请病假', target: '病假申请流程' },
    { q: '转正要多久', target: '转正' },
    { q: '商业保险怎么报销', target: '自助理赔三步走' },
    { q: '办公WiFi怎么连', target: '办公 WiFi' },
    { q: '怎么发IT故障单', target: '怎么发IT单 / IT单写什么' },
    { q: '怎么不能请假', target: '怎么不能请假' },
    { q: '离职需要什么手续', target: '发起离职流程' },
  ],
};
