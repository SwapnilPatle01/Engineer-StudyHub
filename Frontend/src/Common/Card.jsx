import { ArrowRight, ChevronRight } from "lucide-react"

export default function DashboardCard({number, title, onClick,color= "#ffffff"}) {
  return (
    <div className="card" style={{backgroundColor: color}}>

        <div className="left-sec">
        <h1 className="card-heading-1">{number}</h1>
        <h2 className="card-heading-2">{title}</h2>
        </div>
    
      <button className="navigate-button" onClick={onClick}>
        <ChevronRight className="arrow-icon" />
      </button>

      <style>{`
        .card {
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 22px 20px;
          width: 70%;
          
          max-width: 340px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .left-sec{
        display: flex;
        flex-direction: row;
        gap: 12px;
         align-items: center;
        }

        .card-heading-1 {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 18px;
            color: #ffffff;
          }

        .card-heading-2 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 18px;
          color: #ffffff;
          max-width: 70%;
          
        }

        .navigate-button {
          display: flex;
          align-items: center;
          background-color: transparent;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .navigate-button:hover {
          color:rgb(212, 212, 212);
        }

        .arrow-icon {
          width: 26px;
          height: 26px;
          stroke-width: 3;
        }

        @media (max-width: 480px) {
          .card {
            padding: 20px;
          }

          .card-heading-1 {
            font-size: 20px;
          }


         .card-heading-2 {
            font-size: 20px;
          }


          .navigate-button {
            padding: 10px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

