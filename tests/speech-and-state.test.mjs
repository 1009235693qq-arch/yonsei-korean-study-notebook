import test from 'node:test';
import assert from 'node:assert/strict';

test('语音 utterance 使用 ko-KR，并在新朗读前取消旧朗读', () => {
  const calls = []; const synth = { cancel: () => calls.push('cancel'), speak: (u) => calls.push(u.lang) };
  const speak = (text) => { synth.cancel(); const utterance = { text, lang: 'ko-KR' }; synth.speak(utterance); };
  speak('안녕하세요'); speak('감사합니다');
  assert.deepEqual(calls, ['cancel', 'ko-KR', 'cancel', 'ko-KR']);
});
test('完成状态与已掌握状态可独立切换', () => {
  const toggle = (items, id) => items.includes(id) ? items.filter((v) => v !== id) : [...items, id];
  assert.deepEqual(toggle([], 'lesson-1'), ['lesson-1']);
  assert.deepEqual(toggle(['word-1'], 'word-1'), []);
});
