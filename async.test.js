test('the data is peanut butter', (done) => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }

    fetchData(callback)
})

test('the data is peanut butter', () => {
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter')
    })
})

test('the fetch fails with an error', () => {
    expect.assertions(1)
    return fetchData().catch((e) => expect(e).toMatch('error'))
})

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error')
})

test('the data is peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
        await fetchData()
    } catch (e) {
        expect(e).toMatch('error')
    }
})
