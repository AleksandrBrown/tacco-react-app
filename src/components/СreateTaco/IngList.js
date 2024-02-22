import React from "react"
import IngredientsObj from '../ingredientsListData'
import CustomSelector from "./CustomSelector"
import generateRandomId from '../SpecialComponents/RandomId'
import Button from '../SpecialComponents/Button'
import TacoPlaceholder from '../../assets/icons/createicons/tacoplaceholder 1.svg'
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { UseSelector, useDispatch } from "react-redux"
import { addToCart } from "../../store/slices/cartSlice"

function searchById(id) {
    for (const category in IngredientsObj) {
        const resultObject = IngredientsObj[category].find(obj => obj.id === id)
        if (resultObject) {
            return resultObject
        }
    }
    return null
}

function IngList ({handleCreateModal,activeWindow,handleClose}) {
    const [price, setPrice] = React.useState(0)
    const [counter, setCount] = React.useState(1)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [readytoorder, setReadyToOrder] = React.useState(false)
    const [customTaco, setCustomTaco] = React.useState({
        id: '',
        productName: '',
        productImg: TacoPlaceholder,
        productPrice: '',
        quantity: '',
        customOrder: []
    })
    const [selectedField, setSelectedField] = React.useState({
        Selector_1: {status:false, value: 0},
        Selector_2: {status:false, value: 0},
        Selector_3: {status:false, value: 0},
        Selector_4: {status:false, value: 0},
        Selector_5: {status:false, value: 0},
    })
    const dispatch = useDispatch()
    const handleSelectorChanger = (e, obj) => {
        console.log(selectedField[obj].status)
        setSelectedField(prevState => ({
            ...prevState,
            [obj]: {
                ...prevState[obj],
                status: true,
                value: searchById(e.target.value)
            },
        }))
    }
    // const handleCounter = (type) => {
    //     setCount((prevCounter) => {
    //       if (type === 'add') {
    //         return prevCounter + 1
    //       } else if (type === 'remove' && prevCounter > 0) {
    //         return prevCounter - 1
    //       } else {
    //         return prevCounter
    //       }
    //     })
    // }
    const continueOrder = () => {
        const areAllFieldsTrue = Object.values(selectedField).every((value) => value.status === true)
        if(areAllFieldsTrue && !readytoorder) {
            setReadyToOrder(true)
        }
    }

    function createOrder () {
        let orderItems = []
        orderItems = Object.values(selectedField).map(item => item.value)
        let cBase = orderItems[1].name
        const orderId = generateRandomId()
        const newOrder = {
            id: orderId,
            productName: `Your ${cBase} taco`,
            productImg: TacoPlaceholder,
            productPrice: price,
            quantity: counter,
            customOrder: orderItems,
        }
        dispatch(addToCart(newOrder))
        handleCreateModal()
    }
    React.useEffect(() => {
        let totalPrice = Object.values(selectedField).reduce((accumulator, field) => {
          if (field.value) {
            return accumulator + field.value.price
          } else {
            return accumulator
          }
        }, 0);
        setPrice(Math.floor(totalPrice))
    }, [selectedField])
    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? activeIndex : index)
    }
    
    return (
        <>
        <div className={`${readytoorder || activeWindow ? ' blur-sm' : ''} ingredients-list flex gap-4 h-full relative`}>
            <div className="w-9/12 relative">
                <div className="flex flex-col h-full bg-stone-300 rounded-xl overflow-hidden">
                    <video className="w-full h-full object-cover" muted autoPlay>
                        <source src={require('../../assets/icons/createicons/tacov.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className="flex flex-col">
                        <div className="spice-rating">
                            
                        </div>
                        <div>
                            <div className="lactose">

                            </div>
                            <div className="size">

                            </div>
                        </div>
                    
                    </div> */}
                </div>
                <div className="absolute backdrop-blur-xl bottom-0 left-0 h-2/5 w-3/5 rounded-t-xl">
                    <div className="relative left-2 w-full h-full flex flex-col gap-2 justify-center">
                        <div className="flex items-center gap-4">
                            <span className="text-amber-300 border-2 border-amber-300 rounded-full px-4 py-2">Creativity</span><p className="text-md text-stone-100 relative left-1">Unleash Your Imagination</p>
                        </div>
                        <h3 className="text-6xl text-white relative left-1"><span className="text-amber-500">C</span>raft your fantastic <span className="text-amber-300">T</span>aco</h3>
                    </div>
                </div>
            </div>
            <div className="flex w-3/12 min-w-56 h-full">
                    <div className="flex flex-col gap-4 w-full h-full">
                        {
                        Object.entries(IngredientsObj).map(([key, value], index) => (
                            <div 
                                key={key} 
                                id={index} 
                                onClick={() => handleAccordionClick(index)}
                                className={`${activeIndex === index ? 'h-2/6 flex flex-col justify-between bg-amber-300' : 'h-1/6 flex border-2 border-amber-300 items-center bg-stone-800'} p-2 w-full rounded-xl overflow-hidden`}
                            >
                               <div className={`${activeIndex === index ? 'text-stone-800' : 'text-amber-300'} text-lg pointer-events-none w-full overflow-hidden`}>
                                    {`${key}:`}{selectedField[`Selector_${index + 1}`]?.value?.name ? <span className="text-sm text-amber-600"> - {selectedField[`Selector_${index + 1}`]?.value?.name}</span> : ''}
                                </div>
                                <div className={`${activeIndex === index ? 'flex': 'hidden'} overflow-hidden`}>
                                    <CustomSelector
                                    options={value}
                                    id={`Selector_${index + 1}`}
                                    handlerSelect={handleSelectorChanger}
                                    />
                                </div>
                            </div>
                        ))
                        }
                        <div className="flex items-center justify-between p-4 w-full h-1/6 rounded-xl border-2 border-amber-300">
                            <div className="text-lg text-stone-300">Total: <span className="text-xl text-lime-500">{price}</span> $</div>
                            <Button buttonClass={`px-3 py-2 text-stone-800 bg-amber-300 hover:bg-amber-400 rounded-lg`} title={<ArrowRightIcon className="w-8 h-6"/>} handleClick={continueOrder}/>
                        </div>
                    </div>
            </div>
        </div>
        <div className={`${readytoorder || activeWindow ? 'flex' : 'hidden'} ready-to-order justify-center items-center w-full h-full absolute bottom-0 left-0`}>
                {readytoorder && <div className="flex flex-col gap-4 items-center w-1/3 h-auto bg-stone-800 rounded-lg py-2 px-4">
                <div className="text-lg text-stone-300">Add to Cart</div>
                    <div className="flex gap-4 w-full">
                        <Button buttonClass={`w-full px-4 py-2 text-stone-800 bg-amber-300 hover:bg-amber-400 rounded-md`} title='Confirm' handleClick={createOrder}/>
                        <Button buttonClass={`w-full px-4 py-2 text-stone-800 bg-stone-300 hover:bg-stone-400 rounded-md`} title='Cancel' handleClick={() => setReadyToOrder(false)}/>
                    </div>
                </div>}
                {activeWindow && <div className="flex flex-col gap-4 items-center w-1/3 h-auto bg-stone-800 rounded-lg py-2 px-4">
                    <div className="text-lg text-stone-300">Cancel Creation?</div>
                    <div className="flex gap-4 w-full">
                        <Button buttonClass={`w-full px-4 py-2 text-stone-800 bg-amber-300 hover:bg-amber-400 rounded-md`} title='Yes' handleClick={prev => handleClose({...prev, closeCreate: true, activeWindow:false})}/>
                        <Button buttonClass={`w-full px-4 py-2 text-stone-800 bg-stone-300 hover:bg-stone-400 rounded-md`} title='No' handleClick={prev => handleClose({...prev, activeWindow: false})}/>
                    </div>
                </div>}
        </div>
        </>
    )
}
export default IngList