import { InputPassword } from '../input/input'
import './create.scss'

export const Create = () => {

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => event?.preventDefault()

    return  <form onSubmit={handlerSubmit} className="form-container">
        <InputPassword/>
        <input className='button-create' type="submit" value={'cоздать'}/>
    </form>
}