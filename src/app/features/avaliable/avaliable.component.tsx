import { type FC } from 'react'
import { Clock, FileText, ArrowRight } from 'lucide-react'
import { Button } from '@heroui/button'
import { testsConstants } from './elements/constants'

// component
const AvailableComponent: FC = () => {

    // return
    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-highlighted/2">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Available Tests
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Each test reveals a new part of you. Start with intelligence, with more tests coming soon
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testsConstants.map((test, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="mb-4">
                                <test.icon 
                                    className={`w-12 h-12 ${test.iconColor}`}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {test.title}
                            </h3>

                            <div className="flex items-center justify-start gap-6 mb-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{test.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    <span>{test.questions}</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Button
                                    color="primary"
                                    endContent={test.available ? <ArrowRight className="w-4 h-4" /> : null}
                                    className={`w-full font-semibold rounded-lg py-6 ${
                                        test.available 
                                            ? 'bg-primary hover:bg-primary/80 text-white' 
                                            : 'bg-primary/30 text-white cursor-not-allowed'
                                    }`}
                                    disabled={!test.available}
                                >
                                    {test.buttonText}
                                </Button>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AvailableComponent