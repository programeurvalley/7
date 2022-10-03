import React from 'react'

function Fun() {
    return <h4>This is Functional Component</h4>;
  }

class SECOND extends React.Component {
    render() {
      return <h4>This is Class Component</h4>;
    }
  }

export {
    Fun,
    SECOND
} 