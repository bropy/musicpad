import { type FC } from 'react'
import { stepsConstants } from './elements/constants'

// component
const HowItWorksComponent: FC = () => {

    // return
    return (
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12">
                    How it Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stepsConstants.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6">
                                    <Icon 
                                        className={`w-12 h-12 ${
                                            index === 1 ? 'text-blue-500' : 'text-gray-700'
                                        }`}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowItWorksComponent