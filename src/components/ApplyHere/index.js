import React from 'react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdfuoOouk5LLShvpxaJZMUeFmN7Fa44HW2ncJiKJfooxVgl5Q/viewform'

export default () => {
  return (
    <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
      <strong>You can apply here</strong>
    </a>
  )
}
