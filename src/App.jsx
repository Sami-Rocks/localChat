import TextBubble from "./components/TextBubble";

function App() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-auto md:rounded-xl mx-auto max-w-4xl h-screen relative bg-background p-4" >

        <div className="flex flex-col justify-end z-1 h-full pb-14" >
         
          <TextBubble type={'not-user'} message={'lorem ipsum'} />
          <TextBubble type={'user'} message={'Hello!'} />
          <TextBubble type={'not-user'} message={'lorem ipsum'} />

        </div>


        <div className="absolute left-0 bottom-0 z-10 w-full p-4 bg-background" >
          <div className="border border-primary overflow-hidden rounded-full flex justify-between items-center" >
            <input className="w-full outline-none py-2 px-4 bg-transparent" type="text" />
            <button className="pr-4" >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="fill-primary bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
