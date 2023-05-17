import React from 'react'
import '@testing-library/jest-dom'
import  { render } from '@testing-library/react'
import Square from './Square'

test('render', ()=>{
    const props = {
        content:'this is a test',
        important:true
    }

    const component = render(<Square proprs={props} />)

    component.getByText("hola")
})