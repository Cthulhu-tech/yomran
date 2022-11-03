import { InputPassword } from '../input/inputPassword'
import { Input } from '../input/input'
import './create.scss'

export const Create = () => {

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => event?.preventDefault()

    return  <form onSubmit={handlerSubmit} className="form-container">
        <div className='input-container input-flex'>
            <Input />
            <InputPassword/>
        </div>
        <input className='button-create' type="submit" value={'cоздать'}/>
    </form>
}