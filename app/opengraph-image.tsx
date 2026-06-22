import { ImageResponse } from 'next/og';

export const alt = 'Smallcrowdd creative studio concept preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const wordmark =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABONJREFUeAHdWblOW0EUHT+lxsrSYonUrCmxBUkJCEiJEdSAIK3ZUsZgnBIQUCYgTMkioIwQhjIB4R/A/gHMDzj3jDzWeDwzb55tAsqRnsBvu3PP3P2FSgRmwGOxyDKZDMtmsyyXy7FCPl+51hqJ8KOjvZ0NDQ2x3miUNQK8/4rkCFkyICfS2spisRiLkhz8bhZCOgKurq5YOpXif13REg6zeDzOkisrLAjqkTVGcubn55tCRA0B6bU1fuggdgKWkC8UtPf8ublxWhjeMTc7G0hxdS0gAWQ0Ak/+8YUWpFMeZn50fMyVOzo5Yb9vb1kymWThlpaae10Uglv19/dr7xWu5QdBoGmznFEqYy2VKr19/brm6OnqKj08PJR0yF5e1ty/tLhYssEkZ2lhoUrO/f19aZnO9XR2au+Xj8z+fqleeIJNE5MDg4MsTP6tQ5SCUoLMUEbx8ZGZsL29rZWTSCRYcnW1Sk6ErOAbnTski4v7mPnd3R2rF5yAHVqYCSblBaamp6tcIS9lChkg+evSkvb9Y+PjzAQQsb65yV0Q8Ud3HWuoF5wAG4NZH5+GAlMzM5XfSJ06jAwPa8/3khVFHHwe1gZrkEnAc4cgpoFsUHEBE64pL/sFGkRi3e4IIOgVDFkjFqB+gKIIwOsbG9xtfl1cNKQ8wNPgh64uY1oTwE5tkmBThIbp58iSsFOq21AgNRKwu7vLBqiQei5wC2jx8XMAltDT3c2tQWcx2IlBUkRVHqmuYCE37CD7KcEJ6OjocH4ABIyMjLADMmsXnJ+espcMTkDQakoUIbAIW/wAUNvb0My6vh5wAqLlJiMooLxwCxPUxkZF0ZA1/hUqpTCaGF1p6wIQMDkxUaOMi3KPL4WAdooDQTs5GednZ2xZKXRcCPDLPk+NqmYIFdlPSku2nG4DAqOtqtShkTK2GfDUE0hlLvW3CXI8cElx9bbDzYKnOynq73qsAWafK+8qCPCLK7j32idTPCU8lKlIabp0BmsQpWcQIuTI75LmUuk0ey54GILAdz/SgMIUtOIUG0AE6m8XyB0h5nh+gAUc7O+zoID7vG9r08YdZBe4I9L0uzdv+AEd1QKu4gLF8gM2JBYW2AZZQxBgnuCCubk55wAK5dBaj1KHif/VFhzW3N/XV1O2w93UAq4qBmABfpUdMoU6BFEhBz/eHDnWF0ijWKCpeBK72k0KbEtkYWQn34PW29Z/QMfJyUm+6a+wOHmKM0s7cUw9tg1+VaMaLzAvcJ3dwURxoEFrl3oULNrUhMkDFVvrLQPWgA331FQFf/Q1xVDIerlX8XtMbIJmE+wk1iIOk2WqcSkTIJZg2OPporSp5RXIW66hsVJJxW+k1WYDyqvjNL/eQwaI9XStMHwDLa+OBD5ApQ8ZxkUZ4gMfoDpmERfgXQjKjSKE0fYoKWsConisPOVB2QofMzUwLosCeekG875Njst0SwAxJoRZ/CdKGY02JfhQIg9HbdjZ2uJuZhuh68ArVErDUUttYfuypQJrrnwaQ/D4Tg8GJQIZAf4ddDiJOAJ5GYfJEp88T01xgv36C7ivy4byASt96ar5Noj0gK+0qLLwMvVFiOYwHeTeAc0MMChABOShncb/wiqQnoUcBLogcvCez1QLmEjAO3/s7XEStF+H/wdg82DVqClEZoC14pAt6S/0KkI0YxxQOgAAAABJRU5ErkJggg==';

const tiles = [
  { left: 72, top: 56, width: 245, height: 300, rotate: -7, background: '#1d1a18' },
  { left: 310, top: 330, width: 205, height: 250, rotate: 5, background: '#ded9cf' },
  { left: 642, top: 88, width: 245, height: 300, rotate: -3, background: '#a99a86' },
  { left: 912, top: 286, width: 205, height: 250, rotate: 6, background: '#403a35' },
  { left: 488, top: 392, width: 245, height: 172, rotate: -5, background: '#ede5d7' },
  { left: 996, top: -52, width: 205, height: 250, rotate: 4, background: '#746d66' },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#f4f2ef',
          color: '#111',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            opacity: 0.92,
          }}
        >
          {tiles.map((tile, index) => (
            <div
              key={`${tile.left}-${tile.top}`}
              style={{
                position: 'absolute',
                display: 'flex',
                width: tile.width,
                height: tile.height,
                left: tile.left,
                top: tile.top,
                transform: `rotate(${tile.rotate}deg)`,
                background: tile.background,
                border: '10px solid #f4f2ef',
                boxShadow: '0 26px 70px rgba(20, 18, 17, 0.22)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 18,
                  border:
                    index % 2 === 0
                      ? '2px solid rgba(246,246,246,0.38)'
                      : '2px solid rgba(17,17,17,0.18)',
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(244,242,239,0.96) 0%, rgba(244,242,239,0.78) 42%, rgba(244,242,239,0.26) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: 74,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            <img src={wordmark} alt="smallcrowdd." style={{ width: 192, height: 96, objectFit: 'contain' }} />
            <span style={{ color: '#5c5855', fontWeight: 500 }}>creative studio</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 790 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 112,
                lineHeight: 0.92,
                fontWeight: 900,
                letterSpacing: 0,
              }}
            >
              Ideas shaped for screens, stories, and culture.
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 30,
                lineHeight: 1.25,
                color: '#3c3937',
                maxWidth: 700,
              }}
            >
              Branding, web design, product design, and motion from the Smallcrowdd concept.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
