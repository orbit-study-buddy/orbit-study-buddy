// Production server outline.
// Never put your OpenAI or Razorpay secret keys in frontend JavaScript.
//
// Required environment variables:
// OPENAI_API_KEY=...
// RAZORPAY_KEY_ID=...
// RAZORPAY_KEY_SECRET=...
//
// Core server rules:
// 1. Authenticate the student.
// 2. Check subscription status.
// 3. Allow at most 20 student accounts in the pilot.
// 4. Count student questions by calendar day.
// 5. Reject the 16th question until the next day.
// 6. Send allowed questions to the OpenAI API.
// 7. Verify Razorpay webhooks before activating a subscription.
//
// Recommended database fields:
// users(id, email, role, subscription_status, trial_ends_at)
// daily_usage(user_id, date, question_count)
// payments(id, user_id, provider_id, status, amount_inr)
//
// Owner role bypasses the student subscription and question limit.
