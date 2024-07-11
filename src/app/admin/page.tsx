import StatCard from '@/components/StatCard'
import { columns, Payment } from '@/components/table/columns'
import { DataTable } from '@/components/table/DataTable'
import { getRecentAppointmentsList } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const Admin = async () => {
  const appointments = await getRecentAppointmentsList()

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={32}
            width={162}
            alt='Logo'
            className='h-8 w-fit'
          />
        </Link>

        <p className='text-16-semibold'>Admin Dashboard</p>
      </header>

      <main className='admin-main'>
        <section className='w-full space-y-4'>
          <h1 className='header'>Welcome</h1>
          <p className='text-dark-700'>Start the day with managing appointments</p>
        </section>

        <section className='admin-stat'>
          <StatCard
            type='appointments'
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon='/assets/icons/appointments.svg'
          />

          <StatCard
            type='pending'
            count={appointments.pedingCount}
            label="Pending appointments"
            icon='/assets/icons/pending.svg'
          />

          <StatCard
            type='cancelled'
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon='/assets/icons/cancelled.svg'
          />

        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  )
}

export default Admin