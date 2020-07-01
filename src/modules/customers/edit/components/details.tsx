import React, { useEffect } from "react"
import CustomerAddresses from "./addresses"
import CustomerOrders from "./orders"
import CustomerSummary from "./summary"

const CustomerDetails = (
  props: Readonly<{
    customer
    settings
    onCustomerSummaryUpdate
    onUpdateAddress
    onDeleteAddress
    onSetDefaultBillingAddress
    onSetDefaultShippingAddress
    fetchData: Function
    clearData: Function
  }>
) => {
  const {
    customer,
    settings,
    onCustomerSummaryUpdate,
    onUpdateAddress,
    onDeleteAddress,
    onSetDefaultBillingAddress,
    onSetDefaultShippingAddress,
    fetchData,
    clearData,
  } = props

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    return () => clearData()
  }, [])

  if (!customer) return <br />

  return (
    <div className="row row--no-gutter col-full-height">
      <div className="col-xs-12 col-sm-5 col-md-4 col--no-gutter scroll col-full-height">
        <CustomerSummary
          customer={customer}
          settings={settings}
          onCustomerSummaryUpdate={onCustomerSummaryUpdate}
        />

        <CustomerAddresses
          customer={customer}
          settings={settings}
          onUpdateAddress={onUpdateAddress}
          onDeleteAddress={onDeleteAddress}
          onSetDefaultBillingAddress={onSetDefaultBillingAddress}
          onSetDefaultShippingAddress={onSetDefaultShippingAddress}
        />
      </div>
      <div className="col-xs-12 col-sm-7 col-md-8 col--no-gutter scroll col-full-height">
        <CustomerOrders customerId={customer.id} settings={settings} />
      </div>
    </div>
  )
}

export default CustomerDetails
