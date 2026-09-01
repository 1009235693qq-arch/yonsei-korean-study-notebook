/** 所有课程内容集中维护在此；可直接替换第 2–10 课的占位字段。 */
const lessonNames = ['问候', '学校和家', '家人和朋友', '饮食', '一天的生活', '购物', '交通', '电话', '天气和季节', '节假日'];
const topics = ['인사', '학교와 집', '가족과 친구', '음식', '하루 생활', '쇼핑', '교통', '전화', '날씨와 계절', '휴일'];

const vocab = (id, korean, meaning, partOfSpeech = '') => ({ id, korean, meaning, partOfSpeech });
const emptySection = (number) => ({
  id: `section-${number}-1`, order: '01', koreanTitle: '내용을 준비 중입니다', chineseTitle: '等待添加内容',
  objective: '请在 src/data.js 中填写本节的学习目标、语法、对话和词汇。', grammar: [], dialogues: [], vocabulary: []
});
export const lessons = lessonNames.map((name, index) => ({
  id: `lesson-${index + 1}`, number: index + 1, chineseName: name, koreanTopic: topics[index],
  illustration: '/images/irasutoya/lesson-placeholder.svg',
  sections: [emptySection(index + 1)], allVocabulary: []
}));

lessons[0] = {
  ...lessons[0],
  sections: [
    { id: 'section-1-1', order: '01', koreanTitle: '처음 만났을 때', chineseTitle: '初次见面', objective: '能用简单的问候语打招呼，并进行自我介绍。',
      grammar: [{ pattern: '저는 [名词]입니다', explanation: '用于礼貌地说明“我是……”。', tips: '“저는”后接身份、国籍或姓名等；口语中也可省略。', examples: [
        { korean: '저는 학생입니다.', translation: '我是学生。' }, { korean: '저는 중국 사람입니다.', translation: '我是中国人。' }, { korean: '저는 민지입니다.', translation: '我是敏智。' }
      ] }],
      dialogues: [
        { speaker: '가', korean: '안녕하세요?', translation: '您好。' }, { speaker: '나', korean: '안녕하세요. 저는 유나입니다.', translation: '您好。我是尤娜。' }, { speaker: '가', korean: '만나서 반갑습니다.', translation: '很高兴认识您。' }
      ], vocabulary: [vocab('l1-hello', '안녕하세요', '您好', '感叹词'), vocab('l1-i', '저', '我（谦称）', '代词'), vocab('l1-student', '학생', '学生', '名词'), vocab('l1-meet', '만나다', '见面；认识', '动词')]
    },
    { id: 'section-1-2', order: '02', koreanTitle: '인사와 작별', chineseTitle: '问候与道别', objective: '练习常见的礼貌问候和道别表达。',
      grammar: [{ pattern: '감사합니다', explanation: '礼貌地表达“谢谢”。', tips: '适合对不熟悉的人、长辈或正式场合使用。', examples: [
        { korean: '도와주셔서 감사합니다.', translation: '谢谢您的帮助。' }, { korean: '정말 감사합니다.', translation: '非常感谢。' }, { korean: '안녕히 가세요.', translation: '请慢走（对离开的人说）。' }
      ] }],
      dialogues: [{ speaker: '선생님', korean: '내일 봐요.', translation: '明天见。' }, { speaker: '학생', korean: '네, 감사합니다.', translation: '好的，谢谢。' }],
      vocabulary: [vocab('l1-thanks', '감사합니다', '谢谢', '感叹词'), vocab('l1-tomorrow', '내일', '明天', '名词'), vocab('l1-see', '보다', '见；看', '动词'), vocab('l1-goodbye', '안녕히 가세요', '请慢走', '惯用语')]
    }
  ],
  allVocabulary: [vocab('l1-hello', '안녕하세요', '您好', '感叹词'), vocab('l1-i', '저', '我（谦称）', '代词'), vocab('l1-student', '학생', '学生', '名词'), vocab('l1-meet', '만나다', '见面；认识', '动词'), vocab('l1-thanks', '감사합니다', '谢谢', '感叹词'), vocab('l1-tomorrow', '내일', '明天', '名词'), vocab('l1-see', '보다', '见；看', '动词'), vocab('l1-goodbye', '안녕히 가세요', '请慢走', '惯用语')]
};
