import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk لإرسال طلب إعادة تعيين كلمة المرور
export const sendResetEmail = createAsyncThunk(
  'forgetPassword/sendResetEmail',
  async (email, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://a676ec18-1fee-4e5f-903e-1858f964ef22.mock.pstmn.io/forgotPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (!data.success) {
        return rejectWithValue(data.message);
      }
      return data.message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const forgetPasswordSlice = createSlice({
  name: 'forgetPassword',
  initialState: {
    email: '',
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    clearMessages(state) {
      state.error = null;
      state.successMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendResetEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(sendResetEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(sendResetEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setEmail, clearMessages } = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
