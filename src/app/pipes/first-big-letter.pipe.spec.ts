import { FirstBigLetterPipe } from './first-big-letter.pipe';

describe('FirstBigLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstBigLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
