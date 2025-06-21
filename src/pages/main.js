import NoteCodeLogo from '../resources/NoteCodeLogo.svg'
import ShareCom from '../components/share';

function Main() {


    return (
        <>
            <div className="App p-5 d-flex justify-center ">
                <div className='flex justify-center'>
                    <img className='mt-5' src={NoteCodeLogo} />
                </div>
                <div className='mt-8 p-3 '>
                    <h1 className='text-[32px] font-semibold '>Create & Share </h1>
                    <h1 className='font-bold text-[40px]'>Your Code easily </h1>
                </div>

                <div>
                    <ShareCom />
                </div>
            </div>
        </>
    )
}


export default Main