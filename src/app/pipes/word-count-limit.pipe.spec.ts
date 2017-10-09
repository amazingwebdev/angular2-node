import { WordCountLimitPipe } from './word-count-limit.pipe';

describe('WordCountLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new WordCountLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
