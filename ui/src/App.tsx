import { useEffect } from 'react'
import g from 'guark'

export const App = () => {

  useEffect(() => {
    g.hook("mounted").then(() => {
      console.log('mounted')
    }).catch(() => {
      console.log('error') 
    })
  },[])

  const helloWorld = async () => {

    const hello_data = await g.call("hello_world", { name: "Guark working?" })

    console.log(`hello_world call return data: ${hello_data}`)
  }

  const clipboardWrite = () => {
    g.call("clipboard.write", { text: "guark" }).then(() => {
      g.call("notify.send", { message: "Guark copied to your clipboard" })
    })
  }

  const errorDialog = () => {
    g.call("dialog.error", { message: "this is a error from js api! is this working?" })
  }

  const infoDialog = () => {
    g.call("dialog.info", { message: "this is a info from js api! is this working?" })
  }

  const notify = () => {
    g.call("notify.send", { message: "This is a notify test call from ui javascript api." })
  }

  const select = () => {
    g.call("dialog.file", { title: "Select File For Guark APP!" }).then((res: any) =>{
      g.call("notify.send", { message: "File Selected: " + res })
    })
  }

  const close = () => g.exit().then(() => {})

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
                <button onClick={close}>Close app</button>
              </div>
            </header>
          </div>
}