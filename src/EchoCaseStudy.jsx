import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowsLeftRight,
  Broadcast,
  Check,
  CheckCircle,
  Clock,
  Fingerprint,
  LinkSimple,
  LockKeyOpen,
  MapPin,
  Radio,
  Receipt,
  Scan,
  ShieldCheck,
  Ticket,
  UserCheck,
  Wallet,
  Waveform,
} from '@phosphor-icons/react';

import { useLanguage } from './i18n.jsx';
import echoHero from './assets/case-studies/echo-hero.webp';
import echoSystem from './assets/case-studies/echo-system.webp';
import echoVenue from './assets/case-studies/echo-venue.webp';
import echoTransfer from './assets/case-studies/echo-transfer.webp';
import echoLive from './assets/case-studies/echo-live.webp';
import echoScan from './assets/case-studies/echo-scan.webp';
import echoReceipt from './assets/case-studies/echo-receipt.webp';
import echoAfter from './assets/case-studies/echo-after.webp';
import './echo-case.css';

const ECHO_COPY = {
  en: {
    back: 'Portfolio',
    hero: {
      label: 'Brand identity / blockchain product / 2026',
      tagline: 'Every entry leaves an echo',
      cta: 'See how the signal begins',
      roleLabel: 'My role',
      role: 'Product strategy / naming / identity / UX/UI / prototype',
      scopeLabel: 'Scope',
      scope: 'Self-initiated concept / simulated data',
      focusLabel: 'Blockchain role',
      focus: 'Ticket ownership / resale rules / attendance',
    },
    logo: {
      title: 'A scan becomes a signal',
      body: 'Four repeating rings stay recognisable from app icon to venue gate',
      construction: 'Signal construction',
      primary: 'Primary lockup',
      compact: 'Compact lockup',
      motion: 'Motion principle',
      markTitle: 'ECHO signal logo',
      measurement: '04 rings / 01 open signal',
      firstMove: 'My first move',
      firstMoveCopy: 'I named ECHO and built the mark, lockups, motion and physical applications before the product screens',
      applications: 'Ticket / wristband / NFC pass',
      colors: ['Venue black', 'Ticket cream', 'Brushed silver', 'Signal coral'],
    },
    contribution: {
      title: 'I made four actions clear',
      body: 'Blockchain rules became one language across naming, interaction and state',
      scope: 'Product strategy / naming / identity / UX/UI / prototyping / art direction',
      items: [
        { verb: 'Named', title: 'One human promise', copy: 'A ticket people can follow from issue to entry' },
        { verb: 'Mapped', title: 'Four user actions', copy: 'Issue, receive, transfer and enter' },
        { verb: 'Designed', title: 'Review before signature', copy: 'Recipient, price limit and result appear first' },
        { verb: 'Directed', title: 'One visible system', copy: 'From wristband and app to venue gate' },
      ],
    },
    journey: {
      title: 'One ticket, four moments',
      body: 'The chain works in the background while the next action stays obvious',
      navLabel: 'ECHO ticket journey',
      steps: [
        {
          id: 'issue',
          label: 'Issue',
          title: 'A venue creates the ticket',
          copy: 'Validity, transfer window and maximum resale price are set when the ticket is issued',
          facts: [['Rule', 'Set by the venue'], ['Result', 'Ticket ready to receive']],
        },
        {
          id: 'receive',
          label: 'Receive',
          title: 'A guest receives the pass',
          copy: 'The ticket reaches their wallet without making token language part of the experience',
          facts: [['User sees', 'Ticket ready'], ['Proof', 'Current holder']],
        },
        {
          id: 'transfer',
          label: 'Transfer',
          title: 'A transfer is reviewed first',
          copy: 'A custom transfer contract enforces the venue limit; EIP-712 signs the review with a nonce and deadline',
          facts: [['Signature', 'EIP-712 + nonce'], ['Execution', 'Transfer contract']],
        },
        {
          id: 'enter',
          label: 'Enter',
          title: 'The gate checks a fresh challenge',
          copy: 'A signed, changing code checks the ticket without putting direct identity data on-chain',
          facts: [['Gate', 'One check-in'], ['After', 'Attendance record']],
        },
      ],
    },
    product: {
      title: 'Three screens, one calm pass',
      body: 'The product speaks in ticket language, not protocol language',
      screenLabels: ['Ticket', 'Transfer', 'Attendance'],
      tonight: 'Tonight',
      event: 'Minor Echoes',
      venue: 'Echo Room / doors 19:00',
      admission: 'General admission',
      ticketId: 'Ticket #0312',
      ready: 'Ready',
      openPass: 'Open gate pass',
      transfer: 'Transfer ticket',
      review: 'Review before signing',
      recipient: 'Recipient',
      recipientValue: '0x41F2...7A2F',
      maxPrice: 'Maximum resale price',
      maxPriceValue: '110% of face value',
      afterTransfer: 'After confirmation',
      afterTransferValue: 'The ticket moves to the recipient',
      confirmTransfer: 'Review and sign',
      afterEntry: 'After entry',
      youWereHere: 'You were here',
      checkedIn: 'Checked in at 19:42',
      attendance: 'Attendance record',
      attendanceValue: 'Ticket #0312 / checked in',
      viewRecord: 'View record',
      chooseScreen: 'Select screen',
    },
    gate: {
      title: 'Verify the ticket, keep identity data off-chain',
      body: 'A signed, rotating challenge keeps entry quick and reduces screenshot reuse',
      panelLabel: 'Live gate prototype',
      run: 'Run gate check',
      reset: 'Reset demo',
      used: 'Test used ticket',
      states: {
        ready: { title: 'Ready to scan', copy: 'Hold the pass near the reader' },
        checking: { title: 'Checking ticket', copy: 'Holder, validity and check-in state' },
        entered: { title: 'Entry confirmed', copy: 'The ticket is valid and an attendance record is ready' },
        used: { title: 'Ticket already used', copy: 'This ticket checked in at 19:42' },
      },
    },
    chain: {
      title: 'The chain stays backstage',
      body: 'Only the proof needed to enforce the ticket is recorded',
      receiptTitle: 'Transfer review',
      receiptRows: [
        ['Recipient', '0x41F2...7A2F'],
        ['Price rule', 'At or below 110%'],
        ['Signature', 'EIP-712 / nonce / deadline'],
        ['Execution', 'Transfer contract'],
      ],
      txStatesLabel: 'Transaction status',
      txStates: ['Submitted', 'Confirmed', 'Reverted'],
      onchain: 'Recorded on-chain',
      onchainItems: ['Current holder', 'Transfer rule', 'Check-in state'],
      offchain: 'Kept off-chain',
      offchainItems: ['Name and profile', 'Payment details', 'Event preferences'],
      flow: ['Issue', 'Receive', 'Transfer', 'Enter'],
      note: 'Prototype data / local EVM simulation / no live deployment claim',
    },
    impact: {
      title: 'My impact lives in the handoffs',
      body: 'Each design decision removes one place where the ticket could feel uncertain',
      before: 'Before',
      after: 'After',
      pairs: [
        ['Contract language', 'Four plain actions'],
        ['Unclear transfer', 'Recipient, price and result shown first'],
        ['Static gate code', 'Fresh signed challenge'],
        ['Used ticket disappears', 'Attendance record remains'],
      ],
      built: 'Built by me',
      scope: 'Strategy / identity / product / prototype / art direction',
      close: 'Every entry leaves an echo',
      note: 'Self-initiated product concept / simulated ticket and transaction data',
    },
    alt: {
      hero: 'Attendee presenting an ECHO pass at the entrance to an independent music venue',
      system: 'ECHO ticket, wristband, NFC card and venue map arranged on black and brushed-silver surfaces',
      venue: 'Black-brick independent venue carrying the ECHO identity across sign, poster, gate and entry kiosk',
      transfer: 'Two friends reviewing an ECHO ticket transfer together on their phones',
      live: 'Audience watching a live band inside the intimate ECHO venue',
      scan: 'Attendee tapping an ECHO wristband on a brushed-metal venue reader',
      receipt: 'ECHO ticket transfer objects arranged as an overhead transaction still life',
      after: 'Attendee leaving the ECHO venue after the show with an attendance wristband',
    },
  },
  vi: {
    back: 'Portfolio',
    hero: {
      label: 'Nhận diện thương hiệu / sản phẩm blockchain / 2026',
      tagline: 'Mỗi lần vào cổng đều để lại dư âm',
      cta: 'Xem tín hiệu bắt đầu từ đâu',
      roleLabel: 'Vai trò của tôi',
      role: 'Chiến lược sản phẩm / đặt tên / nhận diện / UX/UI / nguyên mẫu',
      scopeLabel: 'Phạm vi',
      scope: 'Ý tưởng cá nhân / dữ liệu mô phỏng',
      focusLabel: 'Vai trò của blockchain',
      focus: 'Quyền sở hữu vé / giới hạn giá bán lại / dấu tham dự',
    },
    logo: {
      title: 'Một nhịp quét tạo nên tín hiệu',
      body: 'Bốn vòng tín hiệu giữ logo dễ nhận diện, từ biểu tượng ứng dụng đến cổng sự kiện',
      construction: 'Cấu trúc tín hiệu',
      primary: 'Logo chính',
      compact: 'Logo thu gọn',
      motion: 'Nguyên tắc chuyển động',
      markTitle: 'Biểu tượng tín hiệu ECHO',
      measurement: '04 vòng / 01 tín hiệu mở',
      firstMove: 'Bước đầu tiên của tôi',
      firstMoveCopy: 'Tôi đặt tên ECHO, phát triển biểu tượng, các phiên bản logo, chuyển động và ứng dụng thực tế trước khi thiết kế giao diện',
      applications: 'Vé / vòng tay / thẻ NFC',
      colors: ['Đen sân khấu', 'Kem giấy vé', 'Bạc xước', 'Đỏ san hô'],
    },
    contribution: {
      title: 'Tôi làm rõ bốn hành động',
      body: 'Tôi biến các quy tắc blockchain thành một ngôn ngữ thống nhất cho tên gọi, thao tác và trạng thái',
      scope: 'Chiến lược sản phẩm / đặt tên / nhận diện / UX/UI / nguyên mẫu / định hướng hình ảnh',
      items: [
        { verb: 'Đặt tên', title: 'Một lời hứa dễ hiểu', copy: 'Tấm vé rõ ràng từ lúc phát hành đến khi vào cổng' },
        { verb: 'Định hình', title: 'Bốn hành động chính', copy: 'Phát hành, nhận vé, chuyển vé và vào cổng' },
        { verb: 'Thiết kế', title: 'Xem trước khi xác nhận', copy: 'Người nhận, giá bán lại tối đa và kết quả đều hiện rõ' },
        { verb: 'Định hướng', title: 'Một hệ thống liền mạch', copy: 'Từ vòng tay và ứng dụng đến cổng sự kiện' },
      ],
    },
    journey: {
      title: 'Một vé, bốn thời điểm',
      body: 'Blockchain hoạt động phía sau, còn hành động tiếp theo luôn rõ ràng',
      navLabel: 'Hành trình của vé ECHO',
      steps: [
        {
          id: 'issue',
          label: 'Phát hành',
          title: 'Ban tổ chức phát hành vé',
          copy: 'Hiệu lực, thời gian được phép chuyển vé và giá bán lại tối đa được thiết lập ngay khi phát hành',
          facts: [['Quy định', 'Do ban tổ chức quy định'], ['Kết quả', 'Vé sẵn sàng để nhận']],
        },
        {
          id: 'receive',
          label: 'Nhận vé',
          title: 'Người tham dự nhận vé',
          copy: 'Vé được đưa vào ví mà người tham dự không cần hiểu các thuật ngữ blockchain',
          facts: [['Người dùng thấy', 'Vé đã sẵn sàng'], ['Xác nhận', 'Ví đang giữ vé']],
        },
        {
          id: 'transfer',
          label: 'Chuyển vé',
          title: 'Xem rõ trước khi chuyển vé',
          copy: 'Hợp đồng chuyển vé thực thi giới hạn của ban tổ chức; EIP-712 ký phần xác nhận kèm nonce và thời hạn',
          facts: [['Chữ ký', 'EIP-712 + nonce'], ['Thực thi', 'Hợp đồng chuyển vé']],
        },
        {
          id: 'enter',
          label: 'Vào cổng',
          title: 'Mỗi lượt quét dùng một mã mới',
          copy: 'Mã xác thực được ký và thay đổi theo từng lượt quét, giúp kiểm tra vé mà không đưa dữ liệu định danh trực tiếp lên blockchain',
          facts: [['Tại cổng', 'Chỉ vào cổng một lần'], ['Sau đó', 'Có dấu tham dự']],
        },
      ],
    },
    product: {
      title: 'Ba màn hình, một tấm vé rõ ràng',
      body: 'Sản phẩm nói bằng ngôn ngữ người dùng, không bắt họ hiểu giao thức',
      screenLabels: ['Vé', 'Chuyển vé', 'Dấu tham dự'],
      tonight: 'Vé tối nay',
      event: 'Minor Echoes',
      venue: 'Echo Room / mở cửa 19:00',
      admission: 'Vé phổ thông',
      ticketId: 'Vé #0312',
      ready: 'Sẵn sàng',
      openPass: 'Mở mã vào cổng',
      transfer: 'Chuyển vé',
      review: 'Kiểm tra trước khi xác nhận',
      recipient: 'Người nhận',
      recipientValue: '0x41F2...7A2F',
      maxPrice: 'Giá bán lại tối đa',
      maxPriceValue: '110% giá vé gốc',
      afterTransfer: 'Sau khi xác nhận',
      afterTransferValue: 'Vé được chuyển sang ví người nhận',
      confirmTransfer: 'Xem lại và ký',
      afterEntry: 'Sau khi vào cổng',
      youWereHere: 'Bạn đã có mặt',
      checkedIn: 'Đã vào cổng lúc 19:42',
      attendance: 'Dấu tham dự',
      attendanceValue: 'Vé #0312 / đã vào cổng',
      viewRecord: 'Xem dấu tham dự',
      chooseScreen: 'Chọn màn hình',
    },
    gate: {
      title: 'Xác thực vé, giữ dữ liệu cá nhân ngoài chuỗi',
      body: 'Mã xác thực có chữ ký thay đổi theo từng lượt quét, giúp vào cổng nhanh và hạn chế dùng lại ảnh chụp màn hình',
      panelLabel: 'Mô phỏng kiểm tra vé',
      run: 'Bắt đầu kiểm tra',
      reset: 'Thử lại',
      used: 'Thử vé đã dùng',
      states: {
        ready: { title: 'Sẵn sàng quét vé', copy: 'Đưa vé lại gần đầu đọc' },
        checking: { title: 'Đang kiểm tra vé', copy: 'Quyền sở hữu, hiệu lực và trạng thái vào cổng' },
        entered: { title: 'Vé hợp lệ', copy: 'Đã xác nhận vào cổng và tạo dấu tham dự' },
        used: { title: 'Vé đã được dùng', copy: 'Vé này đã được dùng để vào cổng lúc 19:42' },
      },
    },
    chain: {
      title: 'Blockchain chỉ nằm ở hậu trường',
      body: 'Chỉ dữ liệu cần thiết để thực thi quy định của vé được ghi lại',
      receiptTitle: 'Kiểm tra trước khi chuyển',
      receiptRows: [
        ['Người nhận', '0x41F2...7A2F'],
        ['Giới hạn giá', 'Không quá 110%'],
        ['Chữ ký', 'EIP-712 / nonce / thời hạn'],
        ['Thực thi', 'Hợp đồng chuyển vé'],
      ],
      txStatesLabel: 'Trạng thái giao dịch',
      txStates: ['Đã gửi', 'Đã xác nhận', 'Đã hoàn tác'],
      onchain: 'Được ghi nhận trên blockchain',
      onchainItems: ['Ví đang giữ vé', 'Quy định chuyển vé', 'Trạng thái vào cổng'],
      offchain: 'Không đưa lên blockchain',
      offchainItems: ['Tên và hồ sơ cá nhân', 'Thông tin thanh toán', 'Sở thích sự kiện'],
      flow: ['Phát hành', 'Nhận vé', 'Chuyển vé', 'Vào cổng'],
      note: 'Dữ liệu thử nghiệm / mô phỏng EVM cục bộ / chưa triển khai thực tế',
    },
    impact: {
      title: 'Tôi làm rõ từng bước chuyển của tấm vé',
      body: 'Mỗi quyết định thiết kế loại bỏ một điểm dễ gây bối rối cho người dùng',
      before: 'Trước',
      after: 'Sau',
      pairs: [
        ['Thuật ngữ hợp đồng khó hiểu', 'Bốn hành động dễ hiểu'],
        ['Chuyển vé mơ hồ', 'Rõ người nhận, giá và kết quả'],
        ['Mã vào cổng cố định', 'Mã xác thực thay đổi theo lượt quét'],
        ['Vé biến mất sau sự kiện', 'Dấu tham dự vẫn còn'],
      ],
      built: 'Tôi trực tiếp thực hiện',
      scope: 'Chiến lược / nhận diện / sản phẩm / nguyên mẫu / định hướng hình ảnh',
      close: 'Mỗi lần vào cổng đều để lại dư âm',
      note: 'Ý tưởng sản phẩm cá nhân / dữ liệu vé và giao dịch được mô phỏng',
    },
    alt: {
      hero: 'Người tham dự xuất trình vé ECHO tại lối vào một không gian âm nhạc độc lập',
      system: 'Vé, vòng tay, thẻ NFC và sơ đồ không gian ECHO trên bề mặt đen và bạc xước',
      venue: 'Không gian gạch đen ứng dụng nhận diện ECHO trên biển hiệu, poster, cổng và kiosk',
      transfer: 'Hai người bạn cùng xem lại thông tin chuyển vé ECHO trên điện thoại',
      live: 'Khán giả xem một ban nhạc biểu diễn trong không gian ECHO',
      scan: 'Người tham dự chạm vòng tay ECHO vào đầu đọc bằng kim loại xước',
      receipt: 'Vé và thiết bị ECHO được sắp đặt từ trên cao để minh họa bước xác nhận chuyển vé',
      after: 'Người tham dự rời ECHO sau buổi diễn với vòng tay lưu dấu tham dự',
    },
  },
  zh: {
    back: '作品集',
    hero: {
      label: '品牌识别 / 区块链产品 / 2026',
      tagline: '让每一次入场都有回响',
      cta: '看看信号如何成形',
      roleLabel: '我的职责',
      role: '产品策略 / 命名 / 品牌识别 / UX/UI 设计 / 原型设计',
      scopeLabel: '项目范围',
      scope: '个人概念项目 / 模拟数据',
      focusLabel: '区块链的作用',
      focus: '票券归属 / 转售规则 / 到场记录',
    },
    logo: {
      title: '一扫，信号就此成形',
      body: '四道信号环从应用图标延伸到场馆入口，始终清晰可辨',
      construction: '信号构成',
      primary: '主标志组合',
      compact: '紧凑版标志',
      motion: '动态规则',
      markTitle: 'ECHO 信号标志',
      measurement: '04 重回响 / 01 个开放信号',
      firstMove: '我的第一步',
      firstMoveCopy: '我先完成 ECHO 的命名、标志、动态规则与线下应用，再着手设计产品界面',
      applications: '票券 / 手环 / NFC 通行卡',
      colors: ['场馆黑', '票纸色', '拉丝银', '信号珊瑚红'],
    },
    contribution: {
      title: '我让四个动作更清楚',
      body: '我把区块链规则转化为统一的命名、交互与状态表达',
      scope: '产品策略 / 命名 / 品牌识别 / UX/UI 设计 / 原型设计 / 艺术指导',
      items: [
        { verb: '命名', title: '一句容易理解的承诺', copy: '从出票到入场，信息始终清楚' },
        { verb: '梳理', title: '四个主要动作', copy: '出票、领票、转票和入场' },
        { verb: '设计', title: '确认前先看清楚', copy: '收票人、价格上限和结果一目了然' },
        { verb: '统筹', title: '一套连贯的系统', copy: '从手环和应用延伸到场馆入口' },
      ],
    },
    journey: {
      title: '一张票，四个时刻',
      body: '区块链在后台工作，用户只需看清下一步',
      navLabel: 'ECHO 票券流程',
      steps: [
        {
          id: 'issue',
          label: '出票',
          title: '主办方创建票券',
          copy: '有效期、可转票时间和最高转售价在出票时确定',
          facts: [['票券规则', '由主办方设定'], ['结果', '可以领取']],
        },
        {
          id: 'receive',
          label: '领票',
          title: '观众领取通行票',
          copy: '票券进入钱包，界面不要求用户理解代币术语',
          facts: [['用户看到', '票券已就绪'], ['验证内容', '当前持有者地址']],
        },
        {
          id: 'transfer',
          label: '转票',
          title: '转票前先完成确认',
          copy: '自定义转票合约执行主办方设定的价格上限；EIP-712 签名带有 nonce 和截止时间',
          facts: [['签名', 'EIP-712 + nonce'], ['执行', '转票合约']],
        },
        {
          id: 'enter',
          label: '扫码入场',
          title: '入口检查动态签名码',
          copy: '动态签名码可验证票券，同时不把直接身份信息写入链上',
          facts: [['入口', '一次入场'], ['入场后', '生成到场记录']],
        },
      ],
    },
    product: {
      title: '三个界面，一张清楚的票',
      body: '界面只讲票务，不要求用户理解底层协议',
      screenLabels: ['票券', '转票', '到场记录'],
      tonight: '今晚的票',
      event: 'Minor Echoes',
      venue: 'Echo Room / 19:00 开门',
      admission: '普通入场票',
      ticketId: '票券 #0312',
      ready: '可以使用',
      openPass: '打开入场码',
      transfer: '转票',
      review: '确认前先看清楚',
      recipient: '收票人',
      recipientValue: '0x41F2...7A2F',
      maxPrice: '最高转售价',
      maxPriceValue: '票面价的 110%',
      afterTransfer: '确认后',
      afterTransferValue: '票券会转入收票人钱包',
      confirmTransfer: '确认信息并签名',
      afterEntry: '入场之后',
      youWereHere: '你来过这里',
      checkedIn: '19:42 已入场',
      attendance: '到场记录',
      attendanceValue: '票券 #0312 / 已入场',
      viewRecord: '查看到场记录',
      chooseScreen: '选择界面',
    },
    gate: {
      title: '只验票，身份信息不上链',
      body: '动态签名码让入场更快，也减少截图被重复使用的风险',
      panelLabel: '入口原型',
      run: '开始验票',
      reset: '重置演示',
      used: '测试已用票',
      states: {
        ready: { title: '可以验票', copy: '将票券靠近读卡器' },
        checking: { title: '正在验票', copy: '检查票券归属、有效期和入场记录' },
        entered: { title: '验票成功', copy: '票券有效，到场记录已生成' },
        used: { title: '票券已使用', copy: '这张票已于 19:42 入场' },
      },
    },
    chain: {
      title: '区块链留在后台',
      body: '只有执行票券规则所需的证明会被记录',
      receiptTitle: '转票确认',
      receiptRows: [
        ['收票人', '0x41F2...7A2F'],
        ['价格规则', '不高于票面价的 110%'],
        ['签名', 'EIP-712 / nonce / 截止时间'],
        ['执行', '转票合约'],
      ],
      txStatesLabel: '交易状态',
      txStates: ['已提交', '已确认', '已回滚'],
      onchain: '记录在链上',
      onchainItems: ['当前持有者地址', '转票规则', '入场状态'],
      offchain: '不上链',
      offchainItems: ['姓名与个人资料', '付款信息', '活动偏好'],
      flow: ['出票', '领票', '转票', '入场'],
      note: '原型数据 / 本地 EVM 模拟 / 尚未正式部署',
    },
    impact: {
      title: '我的贡献贯穿每个关键节点',
      body: '每个设计决定，都让一个容易困惑的环节更清楚',
      before: '之前',
      after: '现在',
      pairs: [
        ['复杂的合约术语', '四个清楚的动作'],
        ['转票结果不明确', '先看收票人、价格和结果'],
        ['固定入场码', '动态签名码'],
        ['票券用完就消失', '保留到场记录'],
      ],
      built: '由我完成',
      scope: '策略 / 品牌识别 / 产品 / 原型设计 / 艺术指导',
      close: '让每一次入场都有回响',
      note: '个人产品概念 / 票券与交易数据均为模拟',
    },
    alt: {
      hero: '观众在独立音乐场馆入口出示 ECHO 通行票',
      system: 'ECHO 票券、手环、NFC 卡和场馆地图陈列在黑色与拉丝银表面上',
      venue: '黑砖独立场馆将 ECHO 识别应用于招牌、海报、入口和验票机',
      transfer: '两位朋友在手机上一起确认 ECHO 转票信息',
      live: '观众在 ECHO 小型场馆内观看乐队演出',
      scan: '观众将 ECHO 手环靠近拉丝金属读卡器',
      receipt: 'ECHO 票券与设备组成俯拍的转票确认画面',
      after: '观众在演出结束后带着到场手环离开 ECHO 场馆',
    },
  },
};

const journeyIcons = {
  issue: Ticket,
  receive: Wallet,
  transfer: ArrowsLeftRight,
  enter: Scan,
};

function cleanTitle(value = '') {
  return String(value).replace(/[\s.!?。！？；;:：]+$/u, '');
}

function EchoMark({ className = '', title, animate = false }) {
  return (
    <svg className={`echo-mark ${animate ? 'is-animated' : ''} ${className}`} viewBox="0 0 120 120" role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'}>
      {title && <title>{title}</title>}
      <path d="M103 35A50 50 0 1 0 103 85" pathLength="1" />
      <path d="M93 41A38 38 0 1 0 93 79" pathLength="1" />
      <path d="M82.5 47A26 26 0 1 0 82.5 73" pathLength="1" />
      <path d="M72 53A14 14 0 1 0 72 67" pathLength="1" />
    </svg>
  );
}

function EchoWordmark({ compact = false, light = false }) {
  return (
    <span className={`echo-wordmark ${compact ? 'is-compact' : ''} ${light ? 'is-light' : ''}`}>
      <EchoMark />
      <strong>ECHO</strong>
    </span>
  );
}

function EchoHero({ work, copy }) {
  return (
    <section className="echo-hero" aria-labelledby="echo-title">
      <img src={echoHero} alt={copy.alt.hero} width="1536" height="1024" loading="eager" fetchPriority="high" />
      <div className="echo-hero-shade" aria-hidden="true" />
      <div className="echo-shell echo-hero-inner">
        <Link className="echo-back" to="/#portfolio"><ArrowLeft size={17} /> {copy.back}</Link>
        <header>
          <span>{copy.hero.label}</span>
          <h1 id="echo-title">{cleanTitle(work?.title || 'ECHO')}</h1>
          <p>{copy.hero.tagline}</p>
          <a href="#echo-logo">{copy.hero.cta} <ArrowUpRight size={18} /></a>
        </header>
        <dl className="echo-hero-meta">
          <div><dt>{copy.hero.roleLabel}</dt><dd>{copy.hero.role}</dd></div>
          <div><dt>{copy.hero.scopeLabel}</dt><dd>{copy.hero.scope}</dd></div>
          <div><dt>{copy.hero.focusLabel}</dt><dd>{copy.hero.focus}</dd></div>
        </dl>
      </div>
      <EchoMark className="echo-hero-mark" animate />
    </section>
  );
}

function EchoLogoSection({ copy }) {
  return (
    <section id="echo-logo" className="echo-section echo-logo-section" aria-labelledby="echo-logo-title">
      <div className="echo-shell">
        <header className="echo-logo-intro">
          <h2 id="echo-logo-title">{cleanTitle(copy.logo.title)}</h2>
          <p>{copy.logo.body}</p>
        </header>
        <div className="echo-logo-board">
          <div className="echo-logo-construction">
            <div className="echo-logo-grid" aria-hidden="true" />
            <div className="echo-logo-axis" aria-hidden="true"><i /><i /></div>
            <EchoMark animate title={copy.logo.markTitle} />
            <span>{copy.logo.construction}</span>
            <small>{copy.logo.measurement}</small>
          </div>
          <div className="echo-logo-lockups">
            <article className="is-primary"><EchoWordmark /><span>{copy.logo.primary}</span></article>
            <article className="is-compact"><EchoWordmark compact light /><span>{copy.logo.compact}</span></article>
            <article className="is-motion"><EchoMark animate /><span>{copy.logo.motion}</span></article>
          </div>
          <figure className="echo-system-visual">
            <img src={echoSystem} alt={copy.alt.system} width="1536" height="1024" loading="lazy" />
            <figcaption><strong>{copy.logo.applications}</strong><span>{copy.logo.colors.join(' / ')}</span></figcaption>
          </figure>
          <aside className="echo-first-move">
            <Fingerprint size={25} weight="duotone" />
            <div><span>{copy.logo.firstMove}</span><p>{copy.logo.firstMoveCopy}</p></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function EchoContributionSection({ copy }) {
  const icons = [Broadcast, LinkSimple, ShieldCheck, MapPin];
  return (
    <section className="echo-section echo-contribution-section" aria-labelledby="echo-contribution-title">
      <div className="echo-shell">
        <figure className="echo-contribution-visual">
          <img src={echoVenue} alt={copy.alt.venue} width="1536" height="1024" loading="lazy" />
          <div className="echo-photo-shade" aria-hidden="true" />
          <figcaption>
            <h2 id="echo-contribution-title">{cleanTitle(copy.contribution.title)}</h2>
            <p>{copy.contribution.body}</p>
          </figcaption>
          <aside><EchoWordmark compact light /><span>{copy.contribution.scope}</span></aside>
        </figure>
        <div className="echo-contribution-rail">
          {copy.contribution.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.verb}>
                <header><Icon size={21} weight="duotone" /><span>{item.verb}</span></header>
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
                <i aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EchoJourneySection({ copy }) {
  const [activeId, setActiveId] = useState('transfer');
  const active = useMemo(() => copy.journey.steps.find((step) => step.id === activeId) || copy.journey.steps[0], [activeId, copy]);
  const ActiveIcon = journeyIcons[active.id];
  return (
    <section className="echo-section echo-journey-section" aria-labelledby="echo-journey-title">
      <div className="echo-shell echo-journey-layout">
        <figure>
          <img src={echoTransfer} alt={copy.alt.transfer} width="1536" height="1024" loading="lazy" />
          <figcaption><ArrowsLeftRight size={22} /><span>{active.label}</span></figcaption>
        </figure>
        <div className="echo-journey-console">
          <header>
            <h2 id="echo-journey-title">{cleanTitle(copy.journey.title)}</h2>
            <p>{copy.journey.body}</p>
          </header>
          <nav aria-label={copy.journey.navLabel}>
            {copy.journey.steps.map((step) => {
              const Icon = journeyIcons[step.id];
              return (
                <button type="button" key={step.id} aria-pressed={active.id === step.id} onClick={() => setActiveId(step.id)}>
                  <Icon size={18} /><span>{step.label}</span>
                </button>
              );
            })}
          </nav>
          <article className="echo-journey-state" key={`${active.id}-${copy.journey.title}`} aria-live="polite">
            <ActiveIcon size={38} weight="duotone" />
            <h3>{cleanTitle(active.title)}</h3>
            <p>{active.copy}</p>
            <dl>{active.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </article>
        </div>
      </div>
    </section>
  );
}

function PhoneTop() {
  return <header className="echo-phone-top"><EchoMark /><b>ECHO</b><span>19:18</span></header>;
}

function TicketScreen({ copy }) {
  return (
    <div className="echo-phone-screen echo-ticket-screen">
      <span>{copy.product.tonight}</span>
      <h3>{cleanTitle(copy.product.event)}</h3>
      <p>{copy.product.venue}</p>
      <div className="echo-ticket-art"><EchoMark animate /><i /><i /></div>
      <dl><div><dt>{copy.product.admission}</dt><dd>{copy.product.ticketId}</dd></div><div><dt>{copy.product.ready}</dt><dd><CheckCircle size={16} weight="fill" /></dd></div></dl>
      <span className="echo-ui-button">{copy.product.openPass}</span>
    </div>
  );
}

function TransferScreen({ copy }) {
  return (
    <div className="echo-phone-screen echo-transfer-screen">
      <span>{copy.product.transfer}</span>
      <h3>{cleanTitle(copy.product.review)}</h3>
      <div className="echo-transfer-orbit"><EchoMark /><i /><EchoMark /></div>
      <dl>
        <div><dt>{copy.product.recipient}</dt><dd>{copy.product.recipientValue}</dd></div>
        <div><dt>{copy.product.maxPrice}</dt><dd>{copy.product.maxPriceValue}</dd></div>
        <div><dt>{copy.product.afterTransfer}</dt><dd>{copy.product.afterTransferValue}</dd></div>
      </dl>
      <span className="echo-ui-button">{copy.product.confirmTransfer}</span>
    </div>
  );
}

function AttendanceScreen({ copy }) {
  return (
    <div className="echo-phone-screen echo-attendance-screen">
      <span>{copy.product.afterEntry}</span>
      <div className="echo-attendance-signal"><Waveform size={42} weight="duotone" /><EchoMark animate /></div>
      <h3>{cleanTitle(copy.product.youWereHere)}</h3>
      <p>{copy.product.checkedIn}</p>
      <div className="echo-attendance-record"><small>{copy.product.attendance}</small><strong>{copy.product.attendanceValue}</strong><Check size={18} weight="bold" /></div>
      <span className="echo-ui-button">{copy.product.viewRecord}</span>
    </div>
  );
}

function EchoProductSection({ copy }) {
  const [activeScreen, setActiveScreen] = useState(1);
  const screens = [TicketScreen, TransferScreen, AttendanceScreen];
  return (
    <section className="echo-section echo-product-section" aria-labelledby="echo-product-title">
      <figure className="echo-live-visual">
        <img src={echoLive} alt={copy.alt.live} width="1536" height="1024" loading="lazy" />
        <div className="echo-photo-shade" aria-hidden="true" />
        <figcaption><h2 id="echo-product-title">{cleanTitle(copy.product.title)}</h2><p>{copy.product.body}</p></figcaption>
      </figure>
      <div className="echo-shell echo-phone-stage">
        {screens.map((Screen, index) => (
          <article
            className={`echo-phone ${activeScreen === index ? 'is-active' : ''} is-${index + 1}`}
            key={copy.product.screenLabels[index]}
          >
            <button
              type="button"
              className="echo-phone-hit"
              aria-pressed={activeScreen === index}
              aria-label={`${copy.product.chooseScreen}: ${copy.product.screenLabels[index]}`}
              onClick={() => setActiveScreen(index)}
            />
            <PhoneTop />
            <Screen copy={copy} />
            <footer><i /></footer>
          </article>
        ))}
      </div>
    </section>
  );
}

function EchoGateSection({ copy }) {
  const [gateState, setGateState] = useState('ready');
  useEffect(() => {
    if (gateState !== 'checking') return undefined;
    const timer = window.setTimeout(() => setGateState('entered'), 850);
    return () => window.clearTimeout(timer);
  }, [gateState]);
  const state = copy.gate.states[gateState];
  const StateIcon = gateState === 'entered' ? CheckCircle : gateState === 'used' ? LockKeyOpen : gateState === 'checking' ? Clock : Radio;
  return (
    <section className="echo-gate-section" aria-labelledby="echo-gate-title">
      <img src={echoScan} alt={copy.alt.scan} width="1536" height="1024" loading="lazy" />
      <div className="echo-gate-shade" aria-hidden="true" />
      <div className="echo-shell echo-gate-layout">
        <header><h2 id="echo-gate-title">{cleanTitle(copy.gate.title)}</h2><p>{copy.gate.body}</p></header>
        <div className={`echo-gate-panel is-${gateState}`}>
          <div className="echo-gate-signal" aria-hidden="true"><EchoMark animate /><i /><i /><i /></div>
          <span>{copy.gate.panelLabel}</span>
          <div className="echo-gate-status" aria-live="polite" key={`${gateState}-${copy.gate.title}`}>
            <StateIcon size={28} weight="duotone" />
            <h3>{cleanTitle(state.title)}</h3>
            <p>{state.copy}</p>
          </div>
          <div className="echo-gate-actions">
            <button type="button" disabled={gateState === 'checking'} onClick={() => setGateState(gateState === 'entered' || gateState === 'used' ? 'ready' : 'checking')}>
              {gateState === 'entered' || gateState === 'used' ? copy.gate.reset : copy.gate.run}
            </button>
            <button type="button" className="is-secondary" onClick={() => setGateState('used')}>{copy.gate.used}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EchoChainSection({ copy }) {
  return (
    <section className="echo-section echo-chain-section" aria-labelledby="echo-chain-title">
      <div className="echo-shell">
        <header className="echo-chain-heading">
          <h2 id="echo-chain-title">{cleanTitle(copy.chain.title)}</h2>
          <p>{copy.chain.body}</p>
        </header>
        <div className="echo-chain-stage">
          <figure>
            <img src={echoReceipt} alt={copy.alt.receipt} width="1536" height="1024" loading="lazy" />
            <figcaption><Receipt size={19} /><span>{copy.chain.receiptTitle}</span></figcaption>
          </figure>
          <article className="echo-receipt-card">
            <header><EchoWordmark compact light /><ShieldCheck size={23} weight="duotone" /></header>
            <h3>{cleanTitle(copy.chain.receiptTitle)}</h3>
            <dl>{copy.chain.receiptRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <div className="echo-signature"><Fingerprint size={22} /><span>EIP-712</span><Check size={16} weight="bold" /></div>
            <div className="echo-tx-states" aria-label={`${copy.chain.txStatesLabel}: ${copy.chain.txStates.join(', ')}`}>
              <small>{copy.chain.txStatesLabel}</small>
              <div>{copy.chain.txStates.map((state, index) => <React.Fragment key={state}><span>{state}</span>{index < copy.chain.txStates.length - 1 && <i aria-hidden="true" />}</React.Fragment>)}</div>
            </div>
          </article>
        </div>
        <div className="echo-data-boundary">
          <article><header><LinkSimple size={21} /><strong>{copy.chain.onchain}</strong></header>{copy.chain.onchainItems.map((item) => <span key={item}><Check size={14} />{item}</span>)}</article>
          <div className="echo-chain-flow" aria-label={copy.chain.flow.join(', ')}>
            {copy.chain.flow.map((item, index) => <React.Fragment key={item}><span>{item}</span>{index < copy.chain.flow.length - 1 && <i aria-hidden="true" />}</React.Fragment>)}
          </div>
          <article><header><ShieldCheck size={21} /><strong>{copy.chain.offchain}</strong></header>{copy.chain.offchainItems.map((item) => <span key={item}><Check size={14} />{item}</span>)}</article>
        </div>
        <p className="echo-prototype-note">{copy.chain.note}</p>
      </div>
    </section>
  );
}

function EchoImpactSection({ copy }) {
  const icons = [Waveform, ArrowsLeftRight, Scan, UserCheck];
  return (
    <section className="echo-impact-section" aria-labelledby="echo-impact-title">
      <img src={echoAfter} alt={copy.alt.after} width="1536" height="1024" loading="lazy" />
      <div className="echo-impact-shade" aria-hidden="true" />
      <div className="echo-shell echo-impact-layout">
        <header><h2 id="echo-impact-title">{cleanTitle(copy.impact.title)}</h2><p>{copy.impact.body}</p></header>
        <div className="echo-impact-grid">
          {copy.impact.pairs.map(([before, after], index) => {
            const Icon = icons[index];
            return (
              <article key={before}>
                <Icon size={24} weight="duotone" />
                <div><small>{copy.impact.before}</small><span>{before}</span></div>
                <ArrowUpRight size={18} />
                <div><small>{copy.impact.after}</small><strong>{after}</strong></div>
              </article>
            );
          })}
        </div>
        <footer>
          <div><span>{copy.impact.built}</span><strong>{copy.impact.scope}</strong></div>
          <div className="echo-closing-lockup"><EchoWordmark light /><h3>{cleanTitle(copy.impact.close)}</h3></div>
          <small>{copy.impact.note}</small>
        </footer>
      </div>
    </section>
  );
}

export function EchoCaseStudy({ work }) {
  const { language } = useLanguage();
  const copy = ECHO_COPY[language] || ECHO_COPY.en;
  return (
    <article className="case-echo" data-language={language} translate="no">
      <EchoHero work={work} copy={copy} />
      <EchoLogoSection copy={copy} />
      <EchoContributionSection copy={copy} />
      <EchoJourneySection copy={copy} />
      <EchoProductSection copy={copy} />
      <EchoGateSection copy={copy} />
      <EchoChainSection copy={copy} />
      <EchoImpactSection copy={copy} />
    </article>
  );
}
