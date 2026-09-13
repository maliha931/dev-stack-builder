import { useState } from 'react'
import { toast } from 'react-toastify'
import technologies from '../data/technologies.json'

const icons = {
  react:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',

  vue:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',

  svelte:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',

  next:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',

  node:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',

  postgresql:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',

  redis:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',

  javascript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',

  typescript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',

  java:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',

  tailwind:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',

  docker:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
}

const badgeStyles = {
  blue: 'bg-blue-50 text-blue-500',
  green: 'bg-green-50 text-green-500',
  orange: 'bg-orange-50 text-orange-500',
  red: 'bg-red-50 text-red-500',
  cyan: 'bg-cyan-50 text-cyan-500',
}

function TechnologyList() {
  const [stack, setStack] = useState([])

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }
  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id))
    toast.success('Technology removed from your stack.')
  }
  const removeAll = () => {
    setStack([])
    toast.success('All technologies removed from your stack.')
  }
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Explore the{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technology Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {technologies.map((technology) => (
              <div
                key={technology.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >

                {/* Logo + Badge */}
                <div className="flex items-start justify-between mb-4">

                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={icons[technology.icon]}
                      alt={technology.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {technology.badge && (
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${badgeStyles[technology.badgeColor] ||
                        'bg-slate-100 text-slate-500'
                        }`}
                    >
                      {technology.badge}
                    </span>
                  )}

                </div>

                {/* Technology Name */}
                <h3 className="text-base font-bold text-slate-900">
                  {technology.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-4 text-slate-500 min-h-[48px]">
                  {technology.description}
                </p>

                {/* Category + Level + Rating */}
                <div className="mt-4 flex items-center justify-between gap-2">

                  <span className="px-2 py-1 rounded bg-slate-100 text-[9px] text-slate-500">
                    {technology.category}
                  </span>

                  <span className="text-[9px] text-slate-500">
                    {technology.level}
                  </span>

                  <span className="text-[10px] text-slate-600">
                    <span className="text-yellow-400">★</span>{' '}
                    {technology.rating}
                  </span>

                </div>

                {/* Add Button */}
                <button
                  onClick={() => addToStack(technology)}
                  disabled={stack.some((item) => item.id === technology.id)}
                  className={`w-full mt-4 rounded-md px-4 py-2.5 text-[11px] font-medium text-white transition ${stack.some((item) => item.id === technology.id)
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-slate-950 hover:bg-slate-800'
                    }`}
                >
                  {stack.some((item) => item.id === technology.id)
                    ? '✓ Added to Stack'
                    : 'Add to Stack'}
                </button>

              </div>
            ))}

          </div>

          {/* Your Stack Sidebar */}
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <h3 className="text-sm font-bold text-slate-900">
              Your Stack
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              No technologies selected yet.
            </p>

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="mt-4 h-20 rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
                <p className="text-[10px] text-slate-400">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
                  >
                    <img
                      src={icons[item.icon]}
                      alt={item.name}
                      className="w-7 h-7 object-contain"
                    />

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-900">
                        {item.name}
                      </p>

                      <p className="text-[10px] text-slate-400">
                        {item.category}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromStack(item.id)}
                      className="text-slate-400 hover:text-red-500 text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {stack.length > 0 && (
              <button
                onClick={removeAll}
                className="w-full mt-4 rounded-md border border-slate-200 px-4 py-2 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
              >
                Remove All
              </button>
            )}

          </aside>

        </div>

      </div>
    </section>
  )
}

export default TechnologyList