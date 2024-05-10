import {render,screen} from '@testing-library/react';
import Header from './Header';

test('Headers renders correctly',()=>{
  render(<Header/>);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
})