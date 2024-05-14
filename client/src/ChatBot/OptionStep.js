import React from "react";
import ChatBot from "react-simple-chatbot";
function OptionStep() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: "1",
            message: "How can I help you?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              {
                value: "access_system",
                label: "Access Online Fine Payment System",
                trigger: "access_system_answer",
              },
              {
                value: "payment_info",
                label: "Information for Fine Payment",
                trigger: "payment_info_answer",
              },
              {
                value: "pay_multiple_fines",
                label: "Pay Multiple Fines",
                trigger: "pay_multiple_fines_answer",
              },
              {
                value: "additional_fees",
                label: "Additional Fees or Charges",
                trigger: "additional_fees_answer",
              },
              {
                value: "missed_deadline",
                label: "Missed Deadline for Fine Payment",
                trigger: "missed_deadline_answer",
              },
              {
                value: "schedule_payment",
                label: "Schedule Fine Payment",
                trigger: "schedule_payment_answer",
              },
              {
                value: "payment_processing_time",
                label: "Fine Payment Processing Time",
                trigger: "payment_processing_time_answer",
              },
              {
                value: "receipt",
                label: "Receipt for Fine Payment",
                trigger: "receipt_answer",
              },
              {
                value: "anonymous_payment",
                label: "Anonymous Fine Payment",
                trigger: "anonymous_payment_answer",
              },
              {
                value: "payment_methods",
                label: "Accepted Payment Methods",
                trigger: "payment_methods_answer",
              },
              {
                value: "payment_history",
                label: "View Payment History",
                trigger: "payment_history_answer",
              },
              {
                value: "discounts",
                label: "Discounts for Early Payment",
                trigger: "discounts_answer",
              },
              {
                value: "dispute",
                label: "Dispute a Fine",
                trigger: "dispute_answer",
              },
              {
                value: "pay_for_others",
                label: "Pay Fines for Others",
                trigger: "pay_for_others_answer",
              },
              {
                value: "check_payment_status",
                label: "Check Payment Status",
                trigger: "check_payment_status_answer",
              },
            ],
          },
          {
            id: "access_system_answer",
            message:
              "You can access the Online Fine Payment System by visiting our website.",
            end: true,
          },
          {
            id: "payment_info_answer",
            message:
              "You will need your vehicle registration number and the fine reference number mentioned in your fine notice to pay your traffic fine online.",
            end: true,
          },
          {
            id: "pay_multiple_fines_answer",
            message:
              "Yes, you can pay multiple fines in a single transaction by selecting the fines you wish to pay during the checkout process.",
            end: true,
          },
          {
            id: "additional_fees_answer",
            message:
              "No, there are no additional fees or charges for using our online payment system. You will only pay the fine amount.",
            end: true,
          },
          {
            id: "missed_deadline_answer",
            message:
              "Missing the deadline for fine payment may result in additional penalties or legal actions. It's important to pay fines on time.",
            end: true,
          },
          {
            id: "schedule_payment_answer",
            message:
              "No, you can't schedule a fine payment for a later date. However, you have one week to pay the amount.",
            end: true,
          },
          {
            id: "payment_processing_time_answer",
            message:
              "Fine payments are usually processed instantly, and you will receive a confirmation once the payment is successful.",
            end: true,
          },
          {
            id: "receipt_answer",
            message:
              "Yes, you will receive a digital receipt for your fine payment, which you can download or print for your records.",
            end: true,
          },
          {
            id: "anonymous_payment_answer",
            message:
              "No, fines must be paid using valid vehicle and personal information as per regulatory requirements.",
            end: true,
          },
          {
            id: "payment_methods_answer",
            message:
              "We accept payments via credit/debit cards, mobile wallets, and online banking from selected banks.",
            end: true,
          },
          {
            id: "payment_history_answer",
            message:
              "Yes, you can view your fine payment history and download past receipts from your account dashboard.",
            end: true,
          },
          {
            id: "discounts_answer",
            message:
              "No, there are no discounts or incentives for early fine payment.",
            end: true,
          },
          {
            id: "dispute_answer",
            message:
              "You can dispute the fine or contact customer support for assistance with resolving the issue.",
            end: true,
          },
          {
            id: "pay_for_others_answer",
            message:
              "Yes, you can pay fines on behalf of someone else by providing their vehicle and fine details during the payment process.",
            end: true,
          },
          {
            id: "check_payment_status_answer",
            message:
              "You will receive a confirmation email or SMS once your fine payment is successfully processed. You can also check your payment status on our platform.",
            end: true,
          },
          {
            id: "other_problems",
            message: "Do you have any other problems?",
            trigger: "other_problems_options",
          },
          {
            id: "other_problems_options",
            options: [
              { value: "yes", label: "Yes", trigger: "2" },
              { value: "no", label: "No", end: true },
            ],
          },
        ]}
        floating={true}
      />
    </div>
  );
}

export default OptionStep;
