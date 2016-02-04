import React from 'react'
import { render } from 'react-dom'
import { Button } from './components/button'

import './main.scss'

render(<Button />, document.querySelector('[data-app]'))
