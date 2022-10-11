import { useEffect } from 'react'
import { call } from 'guark'

export const App = () => {

  const helloWorld = async () => {
    var hello_data = await call("hello_world", { name: "Guark working?" })
    console.log(`hello_world call return data: ${hello_data}`)
  }

  function clipboardWrite()
  {
    call("clipboard.write", { text: "guark" }).then(() =>
    {
      call("notify.send", { message: "Guark copied to your clipboard" })
    })
  }

  function errorDialog()
  {
    call("dialog.error", { message: "this is a error from js api! is this working?" })
  }

  function infoDialog()
  {
    call("dialog.info", { message: "this is a info from js api! is this working?" })
  }

  function notify()
  {
    call("notify.send", { message: "This is a notify test call from ui javascript api." })
  }

  function select()
  {
    call("dialog.file", { title: "Select File For Guark APP!" }).then((res: any) =>
    {
      call("notify.send", { message: "File Selected: " + res })
    })
  }

  return  <div className="App">
  <header className="App-header">
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <div>
      <button onClick={helloWorld}>Hello World</button>
      <button onClick={clipboardWrite}>Write to clipboard</button>
      <button onClick={errorDialog}>Call Dialog error!</button>
      <button onClick={infoDialog}>Call Plugin Dialog info!</button>
      <button onClick={notify}>Call Plugin Notify!</button>
      <button onClick={select}>Call Plugin Dialog Select file!</button>

    </div>
  </header>
</div>
}