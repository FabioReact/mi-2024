describe('Star Component', () => {
    it('should call onFill it user click on Star', () => {
        // const fn = vi.fn()
        // fn()
        // expect(fn).toHaveBeenCalled()
        let called = false;
        const fn = () => called = true;
        expect(called).toBe(true)
    })
})