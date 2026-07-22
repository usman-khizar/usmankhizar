interface Step {
  num: string
  title: string
  desc: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="process-steps">
      {steps.map((step, i) => (
        <div key={step.num}>
          <div className="process-step">
            <span className="process-step-num">{step.num}</span>
            <p className="process-step-title">{step.title}</p>
            <p className="process-step-desc">{step.desc}</p>
          </div>
          {i < steps.length - 1 && <div className="process-step-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
